import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosContact } from 'react-icons/io';
import auth from '../../FirebaseAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {

    const [user] = useAuthState(auth)

    return (

        <div>
            <Navbar expand="lg" variant="dark" className='fixed-top' id='navbar-bg'>
                <Container>
                    <Navbar.Brand href="#">Super-Deal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >   
                            <div className='nav-item'>
                                <Link className='nav-link' to='/home'>HOME</Link>
                            </div>
                            <div className='nav-item'>
                                <Link className='nav-link' to='/shop'>SHOP</Link>
                            </div>
                            <div className='nav-item'>
                                {
                                    user ? (<button className='btn btn-outline-danger' onClick={() => signOut(auth)}>Sing Out</button>) : (<Link className='nav-link text-light' to='/login'>LOGIN <IoIosContact className='text-light fs-3 pb-1' /></Link>)
                                }
                            </div>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;