import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../../assets/icons/google3.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
const SingIn = () => {
    const [google, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleGoogleSingIn = () => {
        google()
    }

    const onSubmit = data => console.log(data);

    if (gUser) {
        console.log(gUser);
    }


    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col w-6/12">
                    <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl font-bold uppercase pt-4 text-primary'>sing in now</h1>
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
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

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" class="input input-bordered" />

                                    <p className='font-bold  pt-3'>Forget password? <span>Reset Now</span></p>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary uppercase font-bold text-white" value="submit" type='submit'>sing in</button>
                                </div>
                                <input />


                                <input {...register("lastName", { required: true })} />
                                {errors.lastName && "Last name is required"}

                                <input type="submit" />
                            </form>


                            <p className='font-bold text-center pt-3 '>New to Doctor Portal? <Link to="/home" className='text-sky-800'>Register Now</Link></p>
                            <div class="divider">OR</div>

                            <button onClick={handleGoogleSingIn} class="btn uppercase font-bold text-white"><img src={googleImg} className="w-10" alt="" />continue with</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;