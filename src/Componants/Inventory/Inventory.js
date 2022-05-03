import useHook from '../useHook/useHook';
import Product from './Product';


const Inventory = () => {

    const [products] = useHook();

    return (
        <section className='container'>
            <div className="row g-5">
                <h1 className='text-center'>Total Product: {products.length}</h1>
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </section>
    );
};

export default Inventory;