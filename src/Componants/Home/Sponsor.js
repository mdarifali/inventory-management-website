import React from 'react';
import "./Sponsor.css";
import sopnsor1 from '../Images/sopnsor/1.png';
import sopnsor2 from '../Images/sopnsor/2.png';
import sopnsor3 from '../Images/sopnsor/3.png';
import sopnsor4 from '../Images/sopnsor/4.png';
import sopnsor5 from '../Images/sopnsor/5.png';
import sopnsor6 from '../Images/sopnsor/6.png';

const Sponsor = () => {
    return (
        <section className="container my-5">
            <div className="row g-3">
                <div className="section-header">
                    <h1 className="text-center">SPONSORS</h1>
                </div>
                <div className="col-md-4">
                    <div className="card shadow" >
                        <img src={sopnsor1} className="img-fluid card-img" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <img src={sopnsor2} className="img-fluid card-img" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow" >
                        <img src={sopnsor3} className="img-fluid card-img" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <img src={sopnsor4} className="img-fluid card-img" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow p-5">
                        <img src={sopnsor5} className="img-fluid card-img" alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow p-5">
                        <img src={sopnsor6} className="img-fluid card-img" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsor;