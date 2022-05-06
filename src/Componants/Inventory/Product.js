import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { email, name, price, img, seller, quantity, description} = product;

    return (
        
        <div className='col-md-4'>
            <div className="card h-100 shadow-lg">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h4 className="card-title fw-bold">{name}</h4>
                    <h5>Description: </h5><p>{description}</p>
                    <h5>Price: <span className='fw-bold'>${price}</span></h5>
                    <p className='m-0'>Seller: {seller}</p>
                    <p>Quantity: {quantity}</p>
                    {product.email ? <p>Email:{product.email}</p> : <span className='text-danger'>Email: Not found</span>}
                </div>
                <Link to={`/ProductDetails/${product._id}`} className='btn btn-outline-success d-flex justify-content-center align-items-center p-3'>
                    Stock Update <MdOutlineSystemUpdateAlt className='ms-2 fs-4' />
                </Link>
            </div>
        </div>
    );
};

export default Product;