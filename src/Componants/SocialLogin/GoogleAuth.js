import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../FirebaseAuth';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const GoogleAuth = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.pathname || '/';
    let errorElement;
    let spinner;

    useEffect(() => {

        if (user) {
            navigate(form);
        }

    }, [user])

    if (error) {
        errorElement = (
            <div>
                <p className='text-danger'>Error: {error?.message}</p>
            </div>
        );
    }

    if (loading) {

        spinner = (<p>Loading...</p>);
    }

    return (
        <div className='mt-2'>
            {errorElement}
            {spinner}
            <div className="d-grid gap-2">
                <button
                    onClick={() => signInWithGoogle()}
                    className=" btn btn-danger"><AiOutlineGoogle className='fs-4 mx-2' />
                </button>
                <button className="btn btn-dark"><AiOutlineGithub className='fs-4' /></button>
                <button className="btn btn-primary"><FaFacebookSquare className='fs-4' /></button>

            </div>

        </div>
    );
};

export default GoogleAuth;