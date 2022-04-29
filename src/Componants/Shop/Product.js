import { FaOpencart } from 'react-icons/fa';

const Product = ({ product }) => {
    const { name, price, img, ratings, seller } = product;

    return (
        
        <div className='col-md-4'>
            <div className="card h-100">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h4 class="card-title">{name}</h4>
                    <h5>Price: <span className='fw-bold'>${price}</span></h5>
                    <p className='m-0'>Brand: {seller}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <button className='btn btn-outline-success d-flex justify-content-center align-items-center'>
                    Add To Cart  <FaOpencart className='ms-2 fs-3'/>
                </button>
            </div>
        </div>
    );
};

export default Product;