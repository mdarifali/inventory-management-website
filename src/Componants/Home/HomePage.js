import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';
import Carousel from './Carousel';

const Home = () => {
    
    return (
        <div>
            <Carousel />
            <Shop />
            <Link to='/AddProducts'><button className='btn btn-success'>Add New Product</button> </Link>
        </div>
    );
};

export default Home;