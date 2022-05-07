import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {

    return (
        <div className='container bg-secondary my-5'>
            <h1>Sorry! page Not Found</h1>
            <Link className='btn btn-warning' to='/home'>Go to Home Page</Link>
        </div>
    );
};

export default PageNotFound;