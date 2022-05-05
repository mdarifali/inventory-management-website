import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleDeliverd = () => {
        const quantity = product.quantity;
        const newQuantity = quantity - 1;
        
       
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Success', result);
                toast.success("Data Insert Successfully", {
                    position: toast.POSITION.TOP_CENTER
                });

            });

    }

    const handleStockInce = (e) => {
        e.preventDefault();
        const quantity = parseFloat(e.target.quantity.value);
        let perviousQuantity = product.quantity;
        if (perviousQuantity === null) {
            perviousQuantity = 0;
        }
        const newQuantity = parseFloat(quantity + perviousQuantity);
        const updateQuan = { quantity: newQuantity};
        console.log(e, updateQuan);

        const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(updateQuan)
        })
            .then(res => res.json())
            .then(result => {
                console.log('Success', result);
                toast.success("Data Insert Successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                e.target.reset();
            });
        

    }

    return (
        <div className='container my-5'>
            <div className="row g-4">
                <div className="col-md-6 shadow-lg rounded-3">
                    <img className="img-fluid w-100" src={product.img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h3 class="card-title">{product.name}</h3>
                        <h4>Product Id: {product._id}</h4>
                        <h5>Price: <span className='fw-bold'>${product.price}</span></h5>
                        <p className='m-0'>Seller: {product.seller}</p>
                        <p className='mb2-0'>Quantity: {product.quantity}</p>
                        <h3 className='mb-2'>Description: </h3><p>{product.description}</p>
                        <button onClick={handleDeliverd} className='btn btn-danger d-flex justify-content-center align-items-center p-3'>
                            Deliverd Now
                        </button>
                        <ToastContainer />
                    </div>
                    <form onSubmit = {handleStockInce} className='mt-4'>
                        <input className='form-control w-25 mb-2' type="number" name="quantity" id="" />
                        <button className='btn btn-success' type="submit">Stock Increase</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;