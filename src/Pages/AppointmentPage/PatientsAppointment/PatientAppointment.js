import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
const PatientAppointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-40 gap-y-20">
                    <img src={chair} alt="" className="max-w-full md:max-w-sm rounded-lg shadow-2xl " />
                    <div className='ff'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}

                        />

                    </div>
                </div>
            </div>
            <AvailableAppointment date={date} setDate={setDate} />
        </div>
    );
};

export default PatientAppointment;