import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import Vehicle from '../assets/img/dash-img/vehicle.svg';
import Information from '../assets/img/dash-img/information.svg';
import Cargo from '../assets/img/dash-img/cargo.svg';
import Message from '../assets/img/dash-img/message.svg';
import Document from '../assets/img/dash-img/document.svg';
import Arrow from '../assets/img/dash-img/arrow.svg';

function DashboardBooking() {
    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopMenu />
                        <div className="container-fluid mb-5">
                            <div className="row">
                                <div className="col col-12 col-lg-3">
                                    <p className="l-h pri-color text-center fw-medium">Ongoing orders</p>
                                    <form className="mb-4">
                                        <div className="input-group w-100">
                                            <input className="bg-light form-control inputs w-100 border-0 small px-4 py-3 search-d" type="text" placeholder="search" />
                                        </div>
                                    </form>
                                    <div className="bg-white p-3 d-flex justify-content-start align-items-center d-card">
                                        <div className="rounded-circle me-2 r-circle"></div>
                                        <span className="pri-color fw-medium l-h">
                                            IR-AP-1245
                                        </span>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-3">
                                    <div className="card w-100 mb-3 card-dash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <Link className='text-decoration-none d-flex flex-column justify-content-center align-items-center btn-color' to={"/truck-information"}>
                                                <p className="text-center l-h pri-color fw-medium">
                                                    Truck Information
                                                </p>
                                                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                    <img src={Vehicle} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 acard-dash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <Link className='text-decoration-none d-flex flex-column justify-content-center align-items-center btn-color' to={"/booking-information"}>
                                                <p className="text-center l-h pri-color fw-medium">
                                                    Booking information
                                                </p>
                                                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                    <img src={Information} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 card-dash card-c">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <Link className='text-decoration-none d-flex flex-column justify-content-center align-items-center btn-color' to={"#"}>
                                                <p className="text-center l-h pri-color fw-medium">Cargo Information</p>
                                                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                    <img src={Cargo} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 card-dash card-c">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <Link className='text-decoration-none d-flex flex-column justify-content-center align-items-center btn-color' to={"#"}>
                                                <p className="text-center l-h pri-color fw-medium">Origin and Destination</p>
                                                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                    <img src={Vehicle} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 card-dash card-c">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <Link className='text-decoration-none d-flex flex-column justify-content-center align-items-center btn-color' to={"#"}>
                                                <p className="text-center l-h pri-color fw-medium">Messages</p>
                                                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                    <img src={Message} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-dash card-c">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <Link className='text-decoration-none d-flex flex-column justify-content-center align-items-center btn-color' to={"#"}>
                                                <p className="text-center l-h pri-color fw-medium">Documents</p>
                                                <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                    <img src={Document} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-6 position-relative">
                                    <iframe
                                        allowFullScreen
                                        frameBorder="0"
                                        src="https://cdn.bootstrapstudio.io/placeholders/map.html"
                                        className="h-100" width="100%" height="400"
                                        style={{ boxShadow: "4px 4px 16px #7786B950", borderRadius: "10px" }}>
                                    </iframe>
                                    <div className="bg-white p-3 position-absolute m-card">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <span className="pri-color fw-medium l-h">
                                                IR-AP-1245
                                            </span>
                                            <div className="rounded-pill me-2 px-3 py-1" style={{ backgroundColor: "#8493C7" }}>
                                                <span className="pri-color fw-medium text-white s-t">
                                                    Loading
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <div className="col col-4">
                                                <span className="l-h fw-light pri-color">
                                                    Freight
                                                </span>
                                            </div>
                                            <div className="col col-8">
                                                <span className="l-h fw-normal pri-color">
                                                    Castic soda
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mb-1">
                                            <div className="col col-4">
                                                <span className="l-h fw-light pri-color">
                                                    Truck
                                                </span>
                                            </div>
                                            <div className="col col-8">
                                                <span className="l-h fw-normal pri-color">
                                                    3
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-start flex-column position-relative gap-1">
                                            <div className="d-flex justify-content-start align-items-center gap-3">
                                                <span className="l-h fw-light pri-color">
                                                    12/2/2021
                                                </span>
                                                <div className="rounded-circle circle-f"></div>
                                                <span className="l-h fw-normal pri-color">
                                                    turkey / Istanbul
                                                </span>
                                            </div>
                                            <div className="d-flex justify-content-start align-items-center gap-3">
                                                <span className="l-h fw-light pri-color">
                                                    12/2/2021
                                                </span>
                                                <div className="rounded-circle circle-t"></div>
                                                <span className="l-h fw-normal pri-color">
                                                    turkey / Istanbul
                                                </span>
                                            </div>
                                            <img className="position-absolute arrow" src={Arrow} />
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
        </div>
    );
}

export default DashboardBooking;