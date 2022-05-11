import React from 'react';
import bgImg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const Appointment = () => {
    return (
        <div style={{
            background: `url(${bgImg})`
        }} className='mt-40'>
            <div class=" shadow-xl grid grid-cols-2 items-center">
                <img src={doctor} alt="" className='flex-1 mt-[-150px]' />
                <div class=" flex-1">
                    <h2 class="card-title text-primary mb-2">Appointment</h2>
                    <h2 className='text-2xl font-bold text-white mb-2'>Make an appointment Today</h2>
                    <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold uppercase text-white">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Appointment;