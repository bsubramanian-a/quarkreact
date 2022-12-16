import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import AVehicle from '../assets/img/dash-img/a-vehicle.svg';
import AInformation from '../assets/img/dash-img/a-information.svg';
import ACargo from '../assets/img/dash-img/a-cargo.svg';
import ALocation from '../assets/img/dash-img/a-location.svg';
import AMessage from '../assets/img/dash-img/a-message.svg';
import ADocument from '../assets/img/dash-img/a-document.svg';
import Arrow from '../assets/img/dash-img/arrow.svg';
import ProPic from '../assets/img/pro-pic.jpg';
import DMsg from '../assets/img/d-msg.svg'
import Truck from '../assets/img/dash-img/truck.svg'

function DashboardComplete() {
    return (
        <body id="page-top" className="bg-white">
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
                                    <div className="bg-white p-3 d-flex justify-content-start align-items-center d-card">
                                        <div className="rounded-circle me-2 r-circle"></div>
                                        <span className="pri-color fw-medium l-h">
                                            IR-AP-1245
                                        </span>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-3">
                                    <div className="card w-100 mb-3 acard-dash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Truck Information
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={AVehicle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 acard-dash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Booking information
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={AInformation} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 card-ddash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Cargo Information
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={ACargo} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 card-ddash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Origin and Destination
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={ALocation} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 mb-3 card-ddash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Messages
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={AMessage} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card w-100 card-ddash">
                                        <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                                            <p className="text-center l-h pri-color fw-medium">
                                                Documents
                                            </p>
                                            <div className="rounded-circle bg-white d-flex justify-content-center align-items-center d-img">
                                                <img src={ADocument} />
                                            </div>
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
                                    <div id="details" className="bg-white p-3 position-absolute m-card">
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <span className="pri-color fw-medium l-h">
                                                IR-AP-1245
                                            </span>
                                            <div className="rounded-pill me-2 px-3 py-1" style={{backgroundColor: "#8493C7"}}>
                                                <span className="fw-medium text-white s-t">
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
                                    <div className="position-absolute pos-card">
                                        <div className="card bg-white border-0 px-1" style={{boxShadow: "0px 4px 16px #5469b122"}}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                                                        <img src={ProPic} />
                                                        <div>
                                                            <p className="l-h pri-color fw-medium mb-0">
                                                                Philip Asras
                                                            </p>
                                                            <p className="fw-medium s-t d-color mb-0">
                                                                Driver - A1
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
                                                        <img src={Truck} />
                                                            <button className="btn btn-primary rounded-pill px-4 btn-msg" type="button">
                                                                Message&nbsp;
                                                                <img src={DMsg} />
                                                            </button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col col-12 col-md-6 col-xl-3">
                                                        <p className="fw-normal s-t d-color mb-1">
                                                            ID number
                                                        </p>
                                                        <p className="fw-normal s-t pri-color mb-0">
                                                            4123-454-7345
                                                        </p>
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-xl-4">
                                                        <p className="fw-normal s-t d-color mb-1">
                                                            Contact number
                                                        </p>
                                                        <p className="fw-normal s-t pri-color mb-0">
                                                            0912-879-456
                                                        </p>
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-xl-3">
                                                        <p className="fw-normal s-t d-color mb-1">
                                                            Transit Number
                                                        </p>
                                                        <p className="fw-normal s-t pri-color mb-0">
                                                            491-2479-456
                                                        </p>
                                                    </div>
                                                    <div className="col col-12 col-md-6 col-xl-2">
                                                        <p className="fw-normal s-t d-color mb-1">
                                                            Status
                                                        </p>
                                                        <p className="fw-normal s-t pri-color mb-0">
                                                            Loading
                                                        </p>
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
        </body>
    );
}

export default DashboardComplete;