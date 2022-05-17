import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleImg from '../../../assets/icons/google3.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import Preloader from '../../Shared/Preloader/Preloader';
import useToken from '../../../hooks/useToken';
const SingIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [
        emailPass,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [google, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(gUser || user)

    let singInError;

    const handleGoogleSingIn = () => {
        google()
    }

    const onSubmit = data => {

        emailPass(data.email, data.password)
    }
    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }


    }, [from, token, navigate])

    if (loading || gLoading) {
        return <Preloader />
    }




    if (error || gError) {
        singInError = <p className='text-red-500 font-bold'>{error?.message || gError?.message}</p>
    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col w-full lg:w-2/5">
                    <div className="card flex-shrink-0 w-full shadow-lg bg-base-100">
                        <h1 className='text-center text-3xl font-bold uppercase pt-4 text-primary'>sing in now</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
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
                                        <span className="label-text">Password</span >
                                    </label >
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered"
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

                                    {
                                        errors.password?.type === 'required' && <p className='text-red-500'>
                                            {errors.password.message}
                                        </p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <p className='text-red-500'>
                                            {errors.password.message}
                                        </p>
                                    }
                                    {singInError}
                                    <p className='font-bold  pt-3'>Forget password? <span>Reset Now</span></p>
                                </div >

                                <input className="btn btn-primary uppercase font-bold text-white w-full mt-2" value="Sing in" type='submit' />
                            </form >


                            <p className='font-bold text-center pt-3 '>New to Doctor Portal? <Link to="/singUp" className='text-sky-800'>Register Now</Link></p>
                            <div className="divider" > OR</div >

                            <button onClick={handleGoogleSingIn} className="btn uppercase font-bold text-white bg-indigo-900"><img src={googleImg} className="w-10" alt="" />continue with</button>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
};

export default SingIn;