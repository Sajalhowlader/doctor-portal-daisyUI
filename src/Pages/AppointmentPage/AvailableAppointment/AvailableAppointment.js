import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import OurService from '../OurService/OurService';
import { useQuery, } from 'react-query'
import Preloader from '../../Shared/Preloader/Preloader';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')
    // useEffect(() => {
    //     fetch(`https://protected-bayou-31346.herokuapp.com/available?bookingDate=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://protected-bayou-31346.herokuapp.com/available?bookingDate=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Preloader />
    }

    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-primary mb-8'>Available Appointment:{format(date, 'PP')}</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-8 w-'>

                {
                    services?.map(service => <OurService service={service} key={service._id} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} reface={refetch} />}

        </div>
    );
};

export default AvailableAppointment;