import React from 'react';
import bgImg from '../../../assets/images/appointment.png'
import doctor from '../../../assets/images/doctor.png'

const Appointment = () => {
    return (
        <div style={{
            background: `url(${bgImg})`
        }} className='mt-40'>
            <div class=" shadow-xl grid md:grid-cols-2 sm:grid-cols-1 items-center">
                <div className='flex-1 hidden lg:block'>
                    <img src={doctor} alt="" className=' mt-[-150px] ' />
                </div>
                <div class=" flex-1 p-5">
                    <h2 class="text-lx font-bold text-primary mb-2 text-center md:text-left">Appointment</h2>
                    <h2 className='text-2xl font-bold text-white mb-2'>Make an appointment Today</h2>
                    <p className='text-white mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold uppercase text-white">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default Appointment;