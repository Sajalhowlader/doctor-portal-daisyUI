import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import OurService from '../OurService/OurService';



const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-primary mb-8'>Available Appointment:{format(date, 'PP')}</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-8 '>

                {
                    services.map(service => <OurService service={service} key={service._id} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} />}

        </div>
    );
};

export default AvailableAppointment;