import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Patients = () => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10'>
            <div class="card bg-base-100 shadow-xl py-5">
                <div class="card-body">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                </div>
                <div className='flex justify-center items-center px-8'>
                    <div class="avatar">
                        <div class="w-24 mask mask-hexagon  mask-primary mask-offset-base-100 mask-offset-2">
                            <img src={people1} alt='' />
                        </div>
                    </div>
                    <div className='pl-10'>
                        <h2 className='text-2xl font-bold'>Jhon duo</h2>
                        <h2 className='text-xl'>Calefornia</h2>
                    </div>

                </div>
            </div>
            <div class="card bg-base-100 shadow-xl py-5 ">
                <div class="card-body">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                </div>
                <div className='flex justify-center items-center px-8'>
                    <div class="avatar">
                        <div class="w-24 mask mask-hexagon  mask-primary mask-offset-base-100 mask-offset-2">
                            <img src={people2} alt='' />
                        </div>
                    </div>
                    <div className='pl-10'>
                        <h2 className='text-2xl font-bold'>Cute Queen</h2>
                        <h2 className='text-xl'>Landon</h2>
                    </div>

                </div>
            </div>
            <div class="card bg-base-100 shadow-xl py-5 ">
                <div class="card-body">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                </div>
                <div className='flex justify-center items-center px-8'>
                    <div class="avatar">
                        <div class="w-24 mask mask-hexagon  mask-primary mask-offset-base-100 mask-offset-2">
                            <img src={people3} alt='' />
                        </div>
                    </div>
                    <div className='pl-10'>
                        <h2 className='text-2xl font-bold'>Maria kala</h2>
                        <h2 className='text-xl'>Sueden</h2>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Patients;