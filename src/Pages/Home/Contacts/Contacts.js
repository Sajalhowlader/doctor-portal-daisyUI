import React from 'react';
import backgroundImg from '../../../assets/images/appointment.png'
const Contacts = () => {
    return (
        <div style={{
            background: `url(${backgroundImg})`
        }} className='mt-32 py-16'>
            <h1 className='text-primary text-center uppercase font-bold'>Contact Us</h1>
            <h1 className='text-center text-3xl mb-5 text-white'>Stay connected with us</h1>

            <div className=' flex items-center justify-center flex-col lg:w-2/4 w-11/12 mx-auto'>

                <input type="email" placeholder="Email Address" class="input input-bordered w-full mb-3" />

                <input type="text" placeholder="Subject" class="input input-bordered w-full mb-3" />

                <textarea type="text" placeholder="Your Message" class="input input-bordered input-lg w-full h-32 mb-6 pl-3" />
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary font-bold uppercase text-white ">Submit</button>
            </div>
        </div>
    );
};

export default Contacts;