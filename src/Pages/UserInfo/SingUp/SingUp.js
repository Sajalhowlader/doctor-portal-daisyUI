import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Preloader from '../../Shared/Preloader/Preloader';

import { async } from '@firebase/util';

const SingUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUser,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const onSubmit = async data => {
        await createUser(data.email, data.password)
        await updateProfile({ displayName: data.name });
    }

    if (user) {
        navigate("/appointment")
    }
    if (loading || updating) {
        return <Preloader />
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col w-2/5">
                    <div class="card flex-shrink-0 w-full shadow-lg bg-base-100">
                        <h1 className='text-center text-3xl font-bold uppercase pt-4 text-primary'>sing up now</h1>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        class="input input-bordered"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Name is Required"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.name?.type === 'required' && <p className='text-red-500'>
                                    {errors.name.message}
                                </p>}
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        class="input input-bordered"
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
                                </div>

                                {errors.email?.type === 'required' && <p className='text-red-500'>
                                    {errors.email.message}
                                </p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500'>
                                    {errors.email.message}
                                </p>}

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        class="input input-bordered"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is Required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters'
                                            }
                                        })}
                                    />

                                    {errors.password?.type === 'required' && <p className='text-red-500'>
                                        {errors.password.message}
                                    </p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-500'>
                                        {errors.password.message}
                                    </p>}
                                    {/* {singInError} */}

                                </div>

                                <input class="btn btn-primary uppercase font-bold text-white w-full mt-2" value="Sing up" type='submit' />
                            </form>


                            <p className='font-bold text-center pt-3 '>Already Have an Account? <Link to="/singUp" className='text-sky-800'>Sing up</Link></p>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;