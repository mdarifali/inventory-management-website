import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosContact } from 'react-icons/io';
import auth from '../../FirebaseAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import logo from '../Images/icon.png'


const Header = () => {

    const [user] = useAuthState(auth)

    return (

        <div>
            <Navbar expand="lg" variant="dark" className='fixed-top' id='navbar-bg'>
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="" /> Super-Deal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >   
                            <div className='nav-item'>
                                <Link className='nav-link' to='/home'>Home</Link>
                            </div>
                            <div className='nav-item'>
                                <Link className='nav-link' to='/blogs'>Blogs</Link>
                            </div>
            
                                {
                                    user && <>
                                        <Link className='nav-link' to='/ManageProducts'>Manage Items</Link>
                                        <Link className='nav-link' to='/AddProducts'>Add Item</Link>
                                    <Link className='nav-link' to='/MyItem'>My Items</Link>
                                    </>
                                }
                                {
                                    user ? (<button className='btn btn-outline-danger' onClick={() => signOut(auth)}>Sing Out</button>) : 
                                    (<Link className='nav-link text-light' to='/login'>Login <IoIosContact className='text-light fs-3 pb-1' /></Link>)
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;