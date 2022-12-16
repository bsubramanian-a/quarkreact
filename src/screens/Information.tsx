import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import BookImg from '../assets/img/order-img/bookInfo.svg'

function Information() {
    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className='bg-m'>
                        <TopMenu />
                        <div className="container-fluid mb-5">
                            <div className="row">
                                <div className="col col-12 col-lg-6">
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-start align-items-start gap-3">
                                            <img className="mt-2" src={BookImg} />
                                            <div>
                                                <p className="fw-bold s-h pri-color mb-0">
                                                    Loading information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="card px-lg-5" style={{ backgroundColor: "#F4F7FA", border: "1px solid #F4F7FA" }}>
                                                <div className="card-body px-lg-5 mx-lg-5 py-lg-4">
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">Company Name</p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true} value="Marco company" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Company representer
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Askara Nalam" disabled={true} readOnly={true} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Clearance Agent Name
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Klman Dolmn" disabled={true} readOnly={true} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Phone Number
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="+65-654-7854-654" disabled={true} readOnly={true} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Loading address
                                                            </p>
                                                            <textarea className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true}>
                                                                Turkish Marble Compny Ataşehir/İstanbul, Turkey
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-6">
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-start align-items-start gap-3">
                                            <img className="mt-2" src={BookImg} />
                                            <div>
                                                <p className="fw-bold s-h pri-color mb-0">
                                                    Departure information
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="card px-lg-5" style={{ backgroundColor: "#F4F7FA", border: "1px solid #F4F7FA" }}>
                                                <div className="card-body px-lg-5 mx-lg-5 py-lg-4">
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Client name
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true} value="Marco company" />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Company representer
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Askara Nalam" disabled={true} readOnly={true} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Clearance Agent Name
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Edvard Slono" disabled={true} readOnly={true} />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">
                                                                Phone Number
                                                            </p>
                                                            <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="+65-654-7854-654" disabled={true} readOnly={true} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col col-12">
                                                            <p className="mb-1 l-h l-color fw-normal">Depatrure address</p>
                                                            <textarea className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true}>
                                                                Poland/ Marsdoc company  Ataşehir/İstanbul, Turkey
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"#page-top"} className="border rounded d-inline scroll-to-top">
                    <i className="fas fa-angle-up"></i>
                </Link>
            </div>
        </div >
    );
}

export default Information;