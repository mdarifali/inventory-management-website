import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;

        fetch(url)
        .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    return (
        <div className='container my-5'>
            <div className="row g-4">
                <div className="col-md-6 shadow-lg rounded-3">
                    <img className="img-fluid w-100" src={product.img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <h5>Price: <span className='fw-bold'>${product.price}</span></h5>
                        <p className='m-0'>Brand: {product.seller}</p>
                        <p>Stock: {product.stock}</p>
                        <h3>Description: </h3><p>{product.description}</p>
                        <button className='btn btn-danger d-flex justify-content-center align-items-center p-3'>
                            Deliver Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;