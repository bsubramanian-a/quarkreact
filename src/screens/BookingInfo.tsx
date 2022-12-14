import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import BookImg from '../assets/img/order-img/bookInfo.svg'

function BookingInfo() {
    return (
        <div id="page-top" className="bg-m">
    <div id="wrapper" className="d-flex vh-100">
        <LeftNav />
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <TopMenu />
                <div className="container-fluid px-5">
                    <div className="row mt-5 mb-3">
                        <div className="col d-flex justify-content-start align-items-start gap-3"><img className="mt-2" src={BookImg} />
                            <div>
                                <p className="fw-bold s-h pri-color mb-2">Booking information</p>
                                <p className="mb-0 l-h pri-color fw-normal">please fill the required fields</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            <div className="card px-lg-5 py-3">
                                <div className="card-body px-lg-5 mx-lg-5">
                                    <div className="row mb-5 justify-content-between align-items-center">
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">
                                                Booking number
                                            </p>
                                            <input type="text" className="w-100 px-4 py-3 t-input" />
                                        </div>
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">
                                                Client name 
                                            </p>
                                            <input type="text" className="w-100 px-4 py-3 t-input" />
                                        </div>
                                    </div>
                                    <div className="row mb-5 justify-content-between align-items-center">
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">
                                                Payment
                                            </p>
                                            <input type="text" className="w-100 px-4 py-3 t-input" />
                                        </div>
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">
                                                Client cantact number 
                                            </p>
                                            <input type="text" className="w-100 px-4 py-3 t-input" />
                                        </div>
                                    </div>
                                    <div className="row mb-5 justify-content-between align-items-center">
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">Number of trucks</p>
                                            <div className="dropdown w-100"><button className="btn btn-primary dropdown-toggle t-input px-4 py-3 w-100 d-flex justify-content-between align-items-center" aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown </button>
                                                <div className="dropdown-menu t-input w-100">
                                                    <Link to="#" className="dropdown-item">
                                                        First Item
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        Second Item
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        Third Item
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">Date of booking </p>
                                            <div className="dropdown w-100"><button className="btn btn-primary dropdown-toggle t-input px-4 py-3 w-100 d-flex justify-content-between align-items-center" aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown </button>
                                                <div className="dropdown-menu t-input w-100">
                                                    <Link to="#" className="dropdown-item">
                                                        First Item
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        Second Item
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        Third Item
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5 justify-content-between align-items-center">
                                        <div className="col col-12 col-lg-5">
                                            <p className="mb-1 l-h l-color fw-normal">
                                                Client adress 
                                            </p>
                                            <textarea className="w-100 px-4 py-3 t-input"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mb-5 justify-content-between align-items-center">
                                        <div className="col col-12 col-lg-5"></div>
                                        <div className="col col-12 col-lg-5">
                                            <button className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" type="button">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Link to="#page-top" className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
    </div>
</div>
    );
}

export default BookingInfo;