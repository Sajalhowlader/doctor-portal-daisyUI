import React from 'react';
import quote from '../../../assets/icons/quote.svg'
const Testimonial = () => {
    return (
        <div className='mt-14 p-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-primary text-xl'>Testimonial</h1>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48 ' />
                </div>
            </div>

        </div>
    );
};

export default Testimonial;