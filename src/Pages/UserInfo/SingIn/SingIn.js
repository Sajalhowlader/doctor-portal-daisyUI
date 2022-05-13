import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../../assets/icons/google3.png'
const SingIn = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col w-6/12">
                    <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <h1 className='text-center text-3xl font-bold uppercase pt-4 text-primary'>sing in now</h1>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />

                                <p className='font-bold  pt-3'>Forget password? <span>Reset Now</span></p>

                                <p className='font-bold  pt-3 '>New to Doctor Portal? <Link to="/home" className='text-sky-800'>Register Now</Link></p>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary uppercase font-bold text-white">sing in</button>
                            </div>

                            <div class="divider">OR</div>

                            <button class="btn uppercase font-bold text-white"><img src={googleImg} className="w-10" alt="" />continue with</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;