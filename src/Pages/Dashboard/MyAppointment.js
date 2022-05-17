import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Preloader from '../Shared/Preloader/Preloader';

const MyAppointment = () => {
    const [user] = useAuthState(auth)

    const { data: bookingInfo, isLoading } = useQuery(['booking', user.email], () => fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
        .then(res => res.json())
    )


    //     const {data:services, isLoading, refetch} = useQuery(['available',formattedDate],()=>fetch(`http://localhost:5000/available?bookingDate=${formattedDate}`)
    //     .then(res => res.json())
    //  )

    if (isLoading) {
        return <Preloader />
    }

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
                            bookingInfo.map((info, index) => <tr>
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