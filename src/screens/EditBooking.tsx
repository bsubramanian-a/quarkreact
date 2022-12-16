import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import BookImg from '../assets/img/order-img/bookInfo.svg'

function EditBooking() {
    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className='bg-color'>
                        <TopMenu />
                        <div className="container-fluid mb-5 px-5">
                            <div className="row mt-5 mb-3">
                                <div className="col d-flex justify-content-start align-items-start gap-3">
                                    <img className="mt-2" src={BookImg} />
                                    <div>
                                        <p className="fw-bold s-h pri-color mb-0">
                                            Booking information
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card px-lg-5" style={{backgroundColor: "#F4F7FA", border: "1px solid #F4F7FA"}}>
                                        <div className="card-body px-lg-5 mx-lg-5 py-lg-5">
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Booking number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="IR-AP-1245" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Client name
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Marsdoc company" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Payment
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Cash" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Client contact number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="+65-654-7854-654" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Number of trucks
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="3" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Date of booking
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="12/2/2020" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Client adress
                                                    </p>
                                                    <textarea className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true}>Turkish Marble Compny Ataşehir/İstanbul, Turkey </textarea>
                                                </div>
                                                <div className="col col-12 col-lg-5"></div>
                                            </div>
                                            <div className="row justify-content-between align-items-center mb-3">
                                                <div className="col col-12 col-lg-5"></div>
                                                <div className="col col-12 col-lg-5"><button className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" type="button">EDIT</button></div>
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

export default EditBooking;