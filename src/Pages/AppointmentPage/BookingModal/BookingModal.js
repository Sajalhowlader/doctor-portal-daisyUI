import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment

    const handleSubmitFrom = (e) => {
        e.preventDefault()
        const date = e.target.date.value
        const slot = e.target.slot.value
        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value

        console.log(date, slot, name, email, phone,);

    }


    return (
        <div className='text-center'>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary mb-10">Book For:{name}</h3>
                    <form onSubmit={handleSubmitFrom}>
                        <input name='date' type="text" value={format(date, 'PP')} class="input input-bordered input-success w-full h-9 mb-4 " disabled />

                        <select name='slot' class="select select-bordered w-full border-primary mb-2" >
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Type here" class="input input-bordered input-success w-full  h-9 mb-4 " />

                        <input name='email' type="email" placeholder="Type here" class="input input-bordered input-success w-full  h-9 mb-4 " />

                        <input name='phone' type="number" placeholder="Type here" class="input input-bordered input-success w-full  h-9 mb-4 " />

                        <input type="submit" class=" btn btn-primary input-bordered input-success w-full h-9 mb-2 " />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;