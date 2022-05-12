import React from 'react';
import chair from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import call from '../../../assets/icons/phone.svg'
import Services from '../Services/Services';
import Exceptional from '../Exceptional/Exceptional';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Patients from '../Patients/Patients';
import Contacts from '../Contacts/Contacts';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-x-56 gap-y-16">
                    <img src={chair} alt="" className="max-w-full md:max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h2 className="text-5xl font-bold">Your New Smile Starts
                            <br />
                            Here</h2>
                        <p className="py-6 w-9/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <br />
                            Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold uppercase text-white">Get Started</button>
                    </div>
                </div>
            </div>


            <div className="w-11/12 mx-auto mt-20">
                <div className='grid md:grid-cols-3 sm:gird-cols-1 gap-8'>
                    <div className="card  bg-gradient-to-r from-primary to-secondary shadow-xl py-3 text-white">
                        <div className="card-body d-flex flex-row items-center">
                            <div>
                                <img src={clock} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h2 className="card-title">Opening Hours</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>

                        </div>
                    </div>
                    <div className="card  bg-accent shadow-xl py-3 text-white">
                        <div className="card-body d-flex flex-row items-center">
                            <div>
                                <img src={location} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h2 className="card-title">Opening Hours</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>

                        </div>
                    </div>
                    <div className="card  bg-gradient-to-r from-primary to-secondary shadow-xl py-3 text-white">
                        <div className="card-body d-flex flex-row items-center">
                            <div>
                                <img src={call} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h2 className="card-title">Opening Hours</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <Exceptional />
            <Appointment />
            <Testimonial />
            <Patients />
            <Contacts />
        </div>
    );
};

export default Home;