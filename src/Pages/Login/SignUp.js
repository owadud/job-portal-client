import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';




const SignUp = () => {
    
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"; 

    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);

    // const [token] = useToken(user);
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name})
       

    }
    let signUpError;
    if (user) {
        navigate(from,{replace: true});
    }
    if (error) {
        signUpError = <p className='text-red-500'><small>{error?.message}</small></p>
    }
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }

                            })}
                        />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                        <label className="label">
                            <span className="label-text">Email</span>
                           
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered"
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered"
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
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                </form>
                {signUpError}
                <div className="divider">Already Have an Account?</div>
                <div className="form-control">
                    <Link to="/login" className="btn btn-primary" > Login</Link>

                </div>
            </div>
        </div>
    );
};

export default SignUp;