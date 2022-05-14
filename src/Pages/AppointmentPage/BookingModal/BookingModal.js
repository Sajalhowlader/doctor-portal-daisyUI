import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment
    const dataFormat = format(date, 'PP')
    const [phone, setPhone] = useState(0)
    const [error, setErrors] = useState('')
    const [user] = useAuthState(auth);




    const handlePhoneNumber = (e) => {
        const phoneNumber = e.target.value
        setPhone(phoneNumber)
    }



    const handleSubmitFrom = (e) => {
        e.preventDefault()
        if (!phone) {
            return setErrors("Add your phone Number")
        } else if (phone.length < 11 || phone.length > 11) {
            return setErrors("Your Phone Number Must Be 11 Character")
        } else if (phone.length === 11) {
            setPhone(phone)
            setErrors('')
        }
        const slot = e.target.slot.value

        const booking = {
            bookingId: _id,
            treatmentName: name,
            bookingDate: dataFormat,
            bookingSlot: slot,
            patentName: user.displayName,
            patientEmail: user.email,
            patientNumber: phone

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('set successfully')
                    setTreatment(null)
                }
            })



    }



    return (
        <div className='text-center'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-success">✕</label>
                    <h3 className="font-bold text-lg text-primary mb-10">Book For:{name}</h3>




                    <form onSubmit={handleSubmitFrom}>
                        <input name='date' type="text" value={format(date, 'PP')} className="input input-bordered input-success w-full h-9 mb-4 " disabled />

                        <select name='slot' className="select select-bordered w-full border-primary mb-2" >
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" value={user?.displayName || ''} className="input input-bordered input-success w-full  h-9 mb-4 " disabled />

                        <input name='email' type="email" value={user?.email || ''} className="input input-bordered input-success w-full  h-9 mb-4 " disabled />

                        <input onChange={handlePhoneNumber} name='phone' type="number" placeholder="Type here" className="input input-bordered input-success w-full  h-9 mb-4 " />
                        {
                            <p className='text-red-500'>{error}</p>
                        }

                        <input type="submit" className=" btn btn-primary input-bordered input-success w-full h-9 mb-2 " />

                    </form>

                </div >
            </div >
        </div >
    );
};

export default BookingModal;