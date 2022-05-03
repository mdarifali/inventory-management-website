import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './ManageProducts.css';
import { TiDeleteOutline } from 'react-icons/ti';
import useHook from '../useHook/useHook';

const ManageProducts = () => {
    const [products] = useHook();

    const handleDelete = id => {
        const confirm = window.confirm('Do you want to Delete');
        if(confirm){
            const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                
                toast.success("Data Delete Successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
            })
        }

    }

    return (
        <div>
            <section className='container'>
                <div className="row g-5">
                    <h1 className='text-center'>Total Product: {products.length}</h1>
                    {
                        products.map(product =>
                            <div key={product._id} className='col-md-6'>
                                <div id='card-items'>
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <img id='product-img' className='img-fluid' src={product.img} alt="" />
                                        <div className="ms-3">
                                            <h5 class="card-title">{product.name}</h5>
                                            <h6>Price: <span className='fw-bold'>${product.price}</span></h6>
                                            <p className='m-0'>Brand: {product.seller}</p>
                                        </div>
                                        <div className='ms-auto'>
                                            <button onClick={() => handleDelete(product._id)} className='delet-btn'><TiDeleteOutline className='delet-icon' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <ToastContainer autoClose={5000} />
            </section>
        </div>
    );
};

export default ManageProducts;