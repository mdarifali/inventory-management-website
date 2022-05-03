import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, price, img, seller, stock, description} = product;

    return (
        
        <div className='col-md-4'>
            <div className="card h-100 shadow-lg">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p>Description: <span>{description}</span></p>
                    <h5>Price: <span className='fw-bold'>${price}</span></h5>
                    <p className='m-0'>Brand: {seller}</p>
                    <p>Stock: {stock}</p>
                </div>
                <Link to={`/ProductDetails/${product._id}`} className='btn btn-outline-success d-flex justify-content-center align-items-center p-3'>
                    Stock Update <MdOutlineSystemUpdateAlt className='ms-2 fs-4'/>
                </Link>
            </div>
        </div>
    );
};

export default Product;