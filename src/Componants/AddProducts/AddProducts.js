import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';



const AddProducts = () => {

    const handleAddProduct = data => {
        data.preventDefault();
        const name = data.target.name.value;
        const price = data.target.price.value;
        const stock = data.target.stock.value;
        const seller = data.target.seller.value;
        const description = data.target.name.value;
        const allData = {name, price, stock, seller, description};
        console.log(allData);
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
            console.log(result);
        })
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
{/* 
                                    <div className="form-outline form-dark mb-4">
                                        <input type="email" className="form-control form-control-lg" placeholder='Email' required />
                                    </div> */}

                                    <div className="form-outline form-dark mb-4">
                                        <input type="text" className="form-control form-control-lg" name='name' placeholder='Product Name' required/>
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="number" className="form-control form-control-lg" name='price' placeholder='Product Price $' required />
                                    </div>

                                    <div className="form-outline form-dark mb-4">
                                        <input type="number" className="form-control form-control-lg" name='stock' placeholder='Product Stock' required />
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
        </section>
    );
};

export default AddProducts;