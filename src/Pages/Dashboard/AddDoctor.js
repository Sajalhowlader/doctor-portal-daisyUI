import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Preloader from '../Shared/Preloader/Preloader';
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log('data', data);
    }
    const { data: treatmentName, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    if (isLoading) {
        return <Preloader />
    }
    /**
     * 3 ways to storage images
     * 1. Third party storage ?Free open public storage is ok for practice project.
     * 2. Your own storage for your own server 
     * 3. Database: for your mongo db
     * 4. YEP: to validate file
     * */
    return (
        <div>
            <div className="hero  ">
                <div className="hero-content flex-col w-full lg:w-2/5">
                    <div className="card flex-shrink-0 w-full shadow-lg bg-base-100">
                        <h1 className='text-center text-3xl font-bold uppercase pt-4 text-primary'>Add a Doctor</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Name is Required"
                                            }
                                        })}
                                    />
                                </div >
                                {
                                    errors.name?.type === 'required' && <p className='text-red-500'>
                                        {errors.name.message}
                                    </p>
                                }
                                < div className="form-control" >
                                    <label className="label" >
                                        <span className="label-text" > Email</span >
                                    </label >
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is Required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Invalid Email address'
                                            }
                                        })}
                                    />
                                </div >

                                {
                                    errors.email?.type === 'required' && <p className='text-red-500'>
                                        {errors.email.message}
                                    </p>
                                }
                                {
                                    errors.email?.type === 'pattern' && <p className='text-red-500'>
                                        {errors.email.message}
                                    </p>
                                }

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Specialty</span >
                                    </label >
                                    <select class="select w-full input input-bordered"
                                        type="treatmentName"
                                        {...register("treatmentName", { required: { value: true, message: "Treatment Name is Required" } })} >
                                        {
                                            treatmentName.map(treatment => <option
                                                key={treatment._id}
                                                value={treatment.name}
                                            >{treatment.name}</option>
                                            )
                                        }
                                    </select>
                                </div >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Your Name"
                                        className="input input-bordered"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: "Image is Required"
                                            }
                                        })}
                                    />
                                </div >
                                {
                                    errors.image?.type === 'required' && <p className='text-red-500'>
                                        {errors.image.message}
                                    </p>
                                }
                                <input className="btn btn-primary uppercase font-bold text-white w-full mt-2" value="Add" type='submit' />
                            </form >



                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default AddDoctor;