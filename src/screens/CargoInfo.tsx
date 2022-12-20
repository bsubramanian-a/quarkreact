import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';

function CargoInfo() {
    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column bg-m" id="content-wrapper">
                    <div id="content">
                        <TopMenu />
                        <div className="container-fluid mb-5 px-5">
                            <div className="row mt-5 mb-3">
                                <div className="col">
                                    <h1 className="fw-bold s-h pri-color mb-0">
                                        Cargo information
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card px-lg-5" style={{ backgroundColor: "#F4F7FA", border: "1px solid #F4F7FA" }}>
                                        <div className="card-body px-lg-5 mx-lg-5 py-lg-5 my-lg-5">
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Commodity Name
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true} value="Castic soda" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Net Weight
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="2500000kg" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Packaging
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Bag, 25 kg" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Gross Weight
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="25500000kg" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        HS code
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="12578" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Loading Time
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="3" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="border rounded d-inline scroll-to-top" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
            </div>
        </div>
    );
}

export default CargoInfo;