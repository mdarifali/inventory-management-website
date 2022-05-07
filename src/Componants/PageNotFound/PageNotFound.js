import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';
import pageNotFoundImg from '../Images/404.jpg';

const PageNotFound = () => {

    return (
        <div className='container mb-5'>
            <div className="position-relative">
                <img id='banner-img' className='img-fluid w-100' src={pageNotFoundImg} alt="" />
                <div className="card-img-overlay ">
                    <div className='position-absolute top-50 start-50 translate-middle text-center'>
                        <Link className='btn btn-outline-danger btn-lg' to='/home'>Go to Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;