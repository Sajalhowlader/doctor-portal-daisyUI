import React from 'react';
import imgOne from '../../../assets/images/fluoride.png'
import imgTwo from '../../../assets/images/cavity.png'
import imgThree from '../../../assets/images/whitening.png'
const Services = () => {
    return (
        <div className='mt-20'>
            <div className='w-11/12 mx-auto mt-20'>
                <div className="service-title text-center">
                    <h4 className='text-xl uppercase text-primary font-bold mb-3'>Our services</h4>
                    <h1 className='text-4xl'>Services We Provide</h1>
                </div>

                <div className="services-info mt-20 grid md:grid-cols-3 sm:grid-cols-1">
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src={imgOne} alt="Shoes" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title">Fluoride Treatment</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={imgTwo} alt="Shoes" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title">Cavity Filling</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={imgThree} alt="Shoes" /></figure>
                        <div className="card-body justify-center items-center">
                            <h2 className="card-title">Teeth Whitening</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;