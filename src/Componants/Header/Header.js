import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="#">Super-Deal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
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
                                <Link className='nav-link' to='/order'>Order</Link>
                            </div>
                            <Nav.Link href="#action2">LOGIN</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;