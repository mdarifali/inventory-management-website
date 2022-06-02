import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    // handleDeliverd function //
    const handleDeliverd = () => {
        const quantity = parseFloat(product.quantity);
        if (quantity <= 0) {
            return alert('Sock Out! add new quantity');
        }
        const newQuantity = parseFloat(quantity - 1);
        const updateQuan = { quantity: newQuantity };
        const displayQuantity = { ...product, quantity: newQuantity};
        setProduct(displayQuantity);

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
                toast.success("Item Deliverd Successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                
            });

    }

    
    // handleStockInce function //
    const handleStockInce = (e) => {
        e.preventDefault();
        const quantity = parseFloat(e.target.quantity.value);
        if (quantity <= 0) {
            return alert('Please Enter positive Value');
        }
        let perviousQuantity = product.quantity;
        if (perviousQuantity === null) {
            perviousQuantity = 0;
        }
        const newQuantity = parseFloat(quantity + perviousQuantity);
        const updateQuan = { quantity: newQuantity};
        const displayQuantity = { ...product, quantity: newQuantity };
        setProduct(displayQuantity);
        
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
                    toast.success("New Quantity added Successfully", {
                        position: toast.POSITION.TOP_CENTER
                    });
                e.target.reset();
            });
    }

    return (
        <div className='container my-5'>
            <div className="row g-4 border border-warning border-2 p-4">
                <div className="col-md-6 shadow-lg rounded-3">
                    <img className="img-fluid w-100" src={product.img} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <h4>Product Id: {product._id}</h4>
                        <h5>Price: <span className='fw-bold'>${product.price}</span></h5>
                        <p className='m-0'>Seller: {product.seller}</p>
                        <p className='mb2-0'>Quantity: {product.quantity}</p>
                        <h3 className='mb-2'>Description: </h3><p>{product.description}</p>
                        <button onClick={handleDeliverd} className='btn btn-danger d-flex justify-content-center align-items-center p-3'>
                            Deliverd Now
                        </button>
                        <form onSubmit={handleStockInce} className='mt-4'>
                            <input className='form-control w-25 mb-3' type="number" name="quantity" id="" />
                            <button className='btn btn-success' type="submit">Quantity Increase</button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;