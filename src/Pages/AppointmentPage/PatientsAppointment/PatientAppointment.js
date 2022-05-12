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
                    <img src={chair} className="md:max-w-sm max-w-full rounded-lg shadow-2xl" alt='' />
                    <div>
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