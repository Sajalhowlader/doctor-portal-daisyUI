import React from 'react';

const OurService = ({ service }) => {
    const { name, slots } = service
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-md text-center">
                <div class="card-body">
                    <h2 className='font-bold text-xl text-secondary'>{name}</h2>
                    <p>
                        {
                            slots.length
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500 font-bold'>No Available</span>
                        }
                    </p>
                    <p className='uppercase'>{slots.length}spaces available</p>
                    <div class="justify-center card-actions">
                        <button disabled={slots.length === 0} class="btn btn-primary uppercase text-white mt-5">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;