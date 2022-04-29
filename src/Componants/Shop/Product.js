import { MdOutlineSystemUpdateAlt } from 'react-icons/md';

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
                <button className='btn btn-outline-success d-flex justify-content-center align-items-center p-3'>
                    Update Product <MdOutlineSystemUpdateAlt className='ms-2 fs-4'/>
                </button>
            </div>
        </div>
    );
};

export default Product;