import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './ManageProducts.css';
import { AiFillDelete } from 'react-icons/ai';
import { MdNoteAdd } from 'react-icons/md';
import useHook from '../useHook/useHook';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products] = useHook();

    const handleDelete = id => {
        const confirm = window.confirm('Do you want to Delete');
        if (confirm) {
            const url = `https://boiling-fjord-43680.herokuapp.com/productapi/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("Data Delete Successfully", {
                        position: toast.POSITION.TOP_CENTER
                    });
                })
        }

    }

    return (
        <div>
            <section className='container my-5'>
                <div className="row g-5">
                    <h1 className='text-center'>Total Product: {products.length}</h1>
                    {
                        products.map(product =>
                            <div key={product._id}>

                                <div className="row g-3">
                                    <div className="col-md-6 col-sm-4 d-flex align-items-center border-bottom border-danger">
                                        <img id='product-img' className='img-fluid' src={product.img} alt="" />
                                        <div>
                                            <h5>{product.name}</h5>
                                            <h5>Price: ${product.price}</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-3 col-sm-4 text-center border-bottom border-danger">
                                        <h4>Seller</h4>
                                        <span>{product.seller}</span>
                                    </div>

                                    <div className="col-md-3 col-sm-4 text-center border-bottom border-danger">
                                        <button onClick={() => handleDelete(product._id)} className='btn'><AiFillDelete className='delete-icon' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Items" /></button>
                                        <Link to='/AddProducts' className='btn' data-bs-toggle="tooltip" data-bs-placement="top" title="Add Items"><MdNoteAdd className='delete-icon' /></Link>
                                    </div>
                                </div>

                            </div>)
                    }
                </div>
                <ToastContainer autoClose={5000} />
            </section>
        </div>
    );
};

export default ManageProducts;