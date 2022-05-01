import React, { useEffect, useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../FirebaseAuth';
import GoogleAuth from '../SocialLogin/GoogleAuth';

const SingUp = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword:''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ""
    });

    const [createUserWithEmailAndPassword, user, loading, hookerror] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    useEffect(() =>{

        if(user){
            navigate(form);
        }
    }, [user])

    if (hookerror) {
        return (
            <div>
                <p className='text-danger'>Error: {hookerror?.message} {hookerror?.message}</p>
            </div>
        );
    }

    const handelEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: '' })
        }
        else {
            setErrors({ ...errors, email: 'Please Enter Valid Email!' });
            setUserInfo({ ...userInfo, email: '' });
        }
    };

    const handelPasswordChange = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'Min 8 characters, at least 1 letter, 1 number and 1 special character!' });
            setUserInfo({ ...userInfo, password: '' });
        }
    };

    const handelConfirmPasswordChange = (e) => {
        
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, password: '' });
        }
        else {
            setErrors({ ...errors, password: 'Password Not Matched!' });
            setUserInfo({ ...userInfo, confirmPassword: '' });
        }
    };
    
    const handleSingup = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword (userInfo.email, userInfo.password);
    };

    return (
        <section className="vh-100">
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='form-bg'>
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleSingup} className="pb-3">
                                    <h2 className="fw-bold mb-2 text-uppercase">Sing Up</h2>
                                    <div className="form-outline form-dark mb-4">
                                        <input type="text" className="form-control form-control-lg" placeholder='Name' />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" className="form-control form-control-lg" placeholder='Email' onChange={handelEmailChange} required/>
                                        {errors?.email && <p className='text-danger text-start my-2'>{errors.email}</p>}
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" className="form-control form-control-lg" placeholder='Password' onChange={handelPasswordChange} required/>
                                        {errors?.password && <p className='text-danger text-start my-2'>{errors.password}</p>}
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" className="form-control form-control-lg" placeholder='Confirm Password' onChange={handelConfirmPasswordChange} required/>
                                        {errors?.confirmPassword && <p className='text-danger text-start my-2'>{errors.confirmPassword}</p>}
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-success p-2" type="submit"><FiLogIn className='fs-5' /> Sing Up</button>
                                    </div>
                                </form>
                                <GoogleAuth />
                                <div className='nav-item fw-bold mt-2   A'>
                                    <Link className="nav-link" to='/login'><span className='text-light'>Already have an account?</span><span className='text-danger fs-5 fw-bold'> Login Hear</span></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingUp;