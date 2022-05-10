import React from 'react';
import chair from '../../../assets/images/chair.png'
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import call from '../../../assets/icons/phone.svg'
const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                    <img src={chair} alt="" className=" rounded-lg shadow-2xl w-2/5" />
                    <div>
                        <h2 className="text-4xl font-bold">Your New Smile Starts
                            <br />
                            Here</h2>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <br />
                            Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold uppercase text-white">Get Started</button>
                    </div>
                </div>
            </div>


            <div className=" mt-3">
                <div className='grid grid-cols-3'>
                    <div class="card  bg-accent shadow-xl py-3 text-white">
                        <div class="card-body d-flex flex-row items-center">
                            <div>
                                <img src={clock} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h2 class="card-title">Opening Hours</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;