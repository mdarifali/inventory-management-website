import React from 'react';
import './Footer.css';
import { MdOutlineFacebook } from 'react-icons/md';
import { AiFillGoogleCircle, AiFillTwitterCircle, AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillHome, AiOutlineMail, AiFillPhone, AiFillPrinter } from 'react-icons/ai';
import { FaGem } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-md-arround p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <p>Get connected with us on social networks:</p>
                    </div>
                    <div>
                        <a href="#/" className="me-4 text-reset">
                            <MdOutlineFacebook className='fs-4'/>
                        </a>
                        <a href="#/" className="me-4 text-reset">
                            <AiFillTwitterCircle className='fs-4'/>
                        </a>
                        <a href="#/" className="me-4 text-reset">
                            <AiFillGoogleCircle className='fs-4'/>
                        </a>
                        <a href="#/" className="me-4 text-reset">
                            <AiFillInstagram className='fs-4'/>
                        </a>
                        <a href="#/" className="me-4 text-reset">
                            <AiFillLinkedin className='fs-4'/>
                        </a>
                        <a href="#/" className="me-4 text-reset">
                            <AiFillGithub className='fs-4'/>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <FaGem className='fs-5'/> Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Jsvascript</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vanila CSS</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Bootsrap</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                            
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><AiFillHome className='fs-5'/> New York, NY 10012, US</p>
                                <p>
                                    <AiOutlineMail className='fs-5'/> info@example.com
                                </p>
                                <p><AiFillPhone className='fs-5'/> + 01 234 567 88</p>
                                <p><AiFillPrinter className='fs-5'/> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="text-center p-4" id='footer-bottom-bg'>
                    © 2022 Copyright: Arif Ali
                </div>
               
            </footer>
            
        </div>
    );
};

export default Footer;