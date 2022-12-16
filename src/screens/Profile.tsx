import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenuStart from './components/TopMenuStart';

function Profile() {
    return (
        <div id="page-top" className='bg-white'>
            <div id="wrapper" className='d-flex vh-100'>
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className='bg-color'>
                        <TopMenuStart />
                        <div className="container-fluid">
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="card px-lg-5">
                                        <div className="card-body px-lg-5 mx-lg-5">
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Company name</p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Managing Director </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Registration Number</p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Managing Director Phone Number </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Number of Trucks (Company Ownership)</p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Operator name </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Number of Trucks (Company Partnership)</p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Operator Phone Number </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Company Contact number </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Overseas Agent </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Company Address </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Overseas Agent Phone Number </p>
                                                    <input type="text" className="w-100 px-4 py-3 t-input" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5"></div>
                                                <div className="col col-12 col-lg-5"><button className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" type="button">Submit</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default Profile;