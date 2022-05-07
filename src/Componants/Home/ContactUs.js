import React from 'react';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const ContactUs = () => {
    return (
        <section className="container my-5">
            <div className="row g-3 d-flex justify-content-center align-items-center">
                <div className="section-header">
                    <h1 className="text-center">CONTACT US</h1>
                </div>
                <div className="col-md-4 text-center">
                    <FiMapPin className='text-danger fs-1 mb-3'/>
                    <h3>ADDRESS</h3>
                    <p>A108 Adam Street, NY 535022, USA</p>
                </div>
                <div className="col-md-4 text-center">
                    <FiPhone className='text-danger fs-1 mb-3'/>
                    <h3>PHONE NUMBER</h3>
                    <p>+1 5589 55488 55</p>
                </div>
                <div className="col-md-4 text-center">
                    <HiOutlineMail className='text-danger fs-1 mb-3'/>
                    <h3>EMAIL</h3>
                    <p>info@example.com</p>
                </div>
            </div>
            <form className="my-5">
                <div className="row">
                    <div className="form-group col-md-6">
                        <input type="text" name="name" className="form-control input-field" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" name="email" className="form-control form-group col-md-6 m-3 mt-md-0" id="name" placeholder="Your Email" required />
                    </div>
                    <div className="form-group my-4">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-danger my-4" type="submit">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;