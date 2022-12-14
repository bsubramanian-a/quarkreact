import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';

function EditProfile() {
    return (
        <div id="page-top" className='bg-color'>
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className="bg-m">
                        <TopMenu />
                        <div className="container-fluid mb-5">
                            <div className="row">
                                <div className="col">
                                    <div className="card px-lg-5 card-sp">
                                        <div className="card-body px-lg-5 mx-lg-5">
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Company name
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Sarcamo company" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Managing Director
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Marsdoc company" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Registration Number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="4758-45786" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Managing Director Phone Number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="+65-654-7854-654" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Number of Trucks (Company Ownership)
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="3" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Operator name
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Patrick" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Number of Trucks (Company Partnership)
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="3" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Operator Phone Number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="12/2/2020" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Company Contact number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="68-5485-4568" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Overseas Agent
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="12/2/2020" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Company Address
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Turkish Marble Compny Ataşehir/İstanbul, Turkey" disabled={true} readOnly={true} />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">
                                                        Overseas Agent Phone Number
                                                    </p>
                                                    <input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="12/2/2020" disabled={true} readOnly={true} />
                                                </div>
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
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default EditProfile;