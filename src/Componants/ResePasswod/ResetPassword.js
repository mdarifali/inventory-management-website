import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import auth from '../../FirebaseAuth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)


    return (
        <section className="vh-100">
            <div className="container my-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='form-bg'>
                            <div className="card-body p-5 text-center">
                                <form onSubmit={() => sendPasswordResetEmail()} className="pb-3">
                                    <div className="form-outline form-dark mb-4">
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" placeholder='Email'  required />
                                    </div>
                                    <div className="d-grid">
                                        <button onClick={async () => {
                                            await sendPasswordResetEmail(email);
                                            alert('Sent email');
                                        }} className="btn btn-success p-2" type="submit"><FiLogIn className='fs-5' />Send</button>
                                    </div>
                                </form>
                                <div className='nav-item fw-bold mb-0'>
                                    <Link className="nav-link" to='/login'><span className='text-info'>Already have an account?</span><span className='text-danger'> Login Hear</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;