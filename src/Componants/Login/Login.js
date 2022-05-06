import React, { useEffect, useState } from 'react';
import './Login.css';
import { FiLogIn } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../FirebaseAuth';
import GoogleAuth from '../SocialLogin/GoogleAuth';
import { ToastContainer, toast } from 'react-toastify';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Login = () => {

    const [userInfo, setUserInfo] = useState ({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState ({
        email:'',
        password:""
    });

    const [ signInWithEmailAndPassword, user, loading, hookerror] = useSignInWithEmailAndPassword (auth);
    let spinner;
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';

    useEffect(() => {

        if (user) {
            navigate(form);
        }
        
    }, [user])

    const handelEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail){
            setUserInfo({ ...userInfo, email: e.target.value});
            setErrors({...errors, email: '' })
        }
        else{
            setErrors({...errors, email: 'Please Enter Valid Email!'});
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
            setErrors({ ...errors, password: 'Min 8 characters, at least 1 letter, 1 number and 1 special character!'});
            setUserInfo({ ...userInfo, password: '' });
        }
    };

    if (loading) {

        spinner = (<LoadingSpinner />);
    }

    if (hookerror) {
        toast.error(hookerror.message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
  
    };

    return (
        <section>
            {spinner}
            <div className="container my-5 h-100">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='form-bg' >
                            <div className="card-body px-5 py-3 text-center">
                                <form onSubmit={handleLogin} className="mb-md-4 mt-md-4 pb-2">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-dark-50 mb-5">Please enter your login email and password!</p>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" className="form-control form-control-lg" placeholder='Email' onChange={handelEmailChange} required/>
                                        {errors?.email && <p className='text-danger text-start my-2'>{errors.email}</p>}
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="password" className="form-control form-control-lg" placeholder='Password' onChange={handelPasswordChange} required/>
                                        {errors?.password && <p className='text-danger text-start my-2'>{errors.password}</p>}
                                    </div>
                                    <div className='my-4'>
                                        <Link className='text-info' to='/resetpass'>Forgot password?</Link>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-success p-2" type="submit"><FiLogIn className='fs-5'/> Login</button>
                                    </div>
                                </form>
                                <GoogleAuth />
                                <div className='pt-3'>
                                    <Link className="nav-link text-info" to='/singup'>Don't have an account? <span className='text-warning fs-6 fw-bold'>Sign Up Now</span></Link>
                                </div>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
