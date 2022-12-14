import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import Vehicle from '../assets/img/dash-img/vehicle.svg'
import Information from '../assets/img/dash-img/information.svg'
import Cargo from '../assets/img/dash-img/cargo.svg'
import Message from '../assets/img/dash-img/message.svg'
import Document from '../assets/img/dash-img/document.svg'

function Dashboard() {
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
                                    <p className="l-h pri-color text-center fw-medium">
                                        Ongoing orders
                                    </p>
                                    <form className="mb-4">
                                        <div className="input-group w-100">
                                            <input className="bg-light form-control inputs w-100 border-0 small px-4 py-3 search-d" type="text" placeholder="search" />
                                        </div>
                                    </form>
                                    <div className="vh-100 bg-white d-card"></div>
                                </div>
                                <div className="col col-12 col-lg-3">
                                    <div className="card w-100 card-dash mb-3">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Truck Information
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={Vehicle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-dash mb-3">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Booking information
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={Information} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-dash mb-3">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Cargo Information
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={Cargo} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-dash mb-3">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Origin and Destination
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={Vehicle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-dash mb-3">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Messages
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={Message} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-dash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Documents
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={Document} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-6">
                                    <iframe
                                        allowFullScreen
                                        frameBorder="0"
                                        src="https://cdn.bootstrapstudio.io/placeholders/map.html"
                                        className="h-100" width="100%" height="400"
                                        style={{ boxShadow: "4px 4px 16px #7786B950", borderRadius: "10px" }}>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>
        </div>
    );
}

export default Dashboard;