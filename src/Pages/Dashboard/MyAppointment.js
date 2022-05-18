import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Preloader from '../Shared/Preloader/Preloader';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    // const { data: bookingInfo, isLoading } = useQuery(['booking', user.email], () => fetch(`https://protected-bayou-31346.herokuapp.com/booking?patientEmail=${user.email}`, {
    //     method: "GET",
    //     headers: {
    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    // })
    //     .then(res => res.json())
    // )

    useEffect(() => {
        if (user) {
            fetch(`https://protected-bayou-31346.herokuapp.com/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/home')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data);
                });
        }
    }, [user, navigate])




















    //     const {data:services, isLoading, refetch} = useQuery(['available',formattedDate],()=>fetch(`https://protected-bayou-31346.herokuapp.com/available?bookingDate=${formattedDate}`)
    //     .then(res => res.json())
    //  )

    // if (isLoading) {
    //     return <Preloader />
    // }

    return (
        <div>
            <div class="overflow-x-auto ">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map((info, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{info.patentName}</td>
                                <td>{info.bookingDate}</td>
                                <td>{info.bookingSlot}</td>
                                <td>{info.treatmentName}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;