import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-primary'>Available Appointment:{format(date, 'PP')}</h1>


        </div>
    );
};

export default AvailableAppointment;