import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/icon/google.png'
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const location = useLocation();
    const signInGoogle = () => {
        signInWithGoogle();

    }
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast('user login success')
        }
    }, [from, token, navigate])
    let errorMessage;
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (gError || error) {
        errorMessage = <p className='text-red-500'>{error?.message || gError.message}</p>
    }
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);

    };
    return (
        <div className='my-10'>
            <div className='flex h-screen justify-center items-center my-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <h2 className='text-5xl text-center font-bold'>Login</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {errorMessage}
                            <input className='btn w-full max-w-xs my-4 text-white' type="submit" value='Login' />
                        </form>
                        <p>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create New Account</Link></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={signInGoogle}
                            className="btn btn-outline"
                        > <img className='w-8 mr-3' src={google} alt="" />Continue With Google</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Login;