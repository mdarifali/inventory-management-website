import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillFileAdd } from 'react-icons/ai';
import auth from '../../FirebaseAuth';


const AddProducts = () => {
    const [user] = useAuthState (auth);

    const handleAddProduct = data => {
        data.preventDefault();
        const email = data.target.email.value;
        const name = data.target.name.value;
        const price = data.target.price.value;
        const quantity = data.target.quantity.value;
        const seller = data.target.seller.value;
        const img = data.target.img.value;
        const description = data.target.name.value;
        const allData = { email, name, price, quantity, seller, img, description};
        
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
        .then(res => res.json())
        .then(result => {
            console.log('Success', result);
            toast.success("Data Insert Successfully", {
                position: toast.POSITION.TOP_CENTER
            });
            data.target.reset();
        });

    }
    
    return (
        <section>
            <div className="container my-5 h-100">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div id='form-bg'>
                            <div className="card-body p-5 text-center">
                                <form onSubmit={handleAddProduct} className="pb-3">
                                    <h2 className="fw-bold mb-4 text-uppercase">Enter Products Details</h2>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" className="form-control form-control-lg" name='email' value={user?.email}/>
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="text" className="form-control form-control-lg" name='name' placeholder='Product Name' required/>
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="number" className="form-control form-control-lg" name='price' placeholder='Product Price $' required />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="number" className="form-control form-control-lg" name='quantity' placeholder='Product Quantity' required />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="text" className="form-control form-control-lg" name='seller' placeholder='Seller Name' required />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="text" className="form-control form-control-lg" name='img' placeholder='Image Url' required />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <textarea className="form-control form-control-lg" name="description" placeholder='Product Description' required></textarea>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-success p-2" type="submit">Add Now <AiFillFileAdd className='fs-4 mb-1' /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={7000}/>
        </section>
    );
};

export default AddProducts;