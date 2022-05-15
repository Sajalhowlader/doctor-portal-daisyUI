import React from 'react';

const OurService = ({ service, setTreatment }) => {
    const { name, available } = service





    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-md text-center">
                <div className="card-body">
                    <h2 className='font-bold text-xl text-secondary'>{name}</h2>
                    <p>
                        {
                            available.length
                                ? <span>{available[0]}</span>
                                : <span className='text-red-500 font-bold'>No Available</span>
                        }
                    </p>
                    <p className='uppercase'>{available.length}spaces available</p>
                    <div className="justify-center card-actions">

                        <label htmlFor="booking-modal" disabled={available.length === 0}
                            className="btn btn-primary uppercase text-white mt-5" onClick={() => setTreatment(service)}>Book Appointment</label>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default OurService;