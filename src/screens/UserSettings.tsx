import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import Avatars from '../assets/img/avatars/avatar1.jpeg'

function UserSettings() {
    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className="bg-color">
                        <TopMenu />
                        <div className="container-fluid p-5 pb-0 mb-5">
                            <div className="row">
                                <div className="col">
                                    <div className="card px-lg-5 card-sp">
                                        <div className="card-body px-lg-5 mx-lg-5">
                                            <div className="row mb-5">
                                                <div className="col d-flex flex-column justify-content-center align-items-center"><img className="rounded-circle mb-3 mt-4" src={Avatars} width="160" height="160" />
                                                    <div className="mb-3 d-flex justify-content-center"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">First Name</p><input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" disabled={true} readOnly={true} value="Sarcamo company" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Last Name</p><input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="Marsdoc company" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Email Address</p><input type="text" className="w-100 px-4 py-3 td-input pri-color fw-medium l-h text-center" value="4758-45786" disabled={true} readOnly={true} />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between align-items-center mb-5">
                                                <div className="col col-12 col-lg-5 mb-3"><a className="rl-color text-decoration-none" href="/change-password">Change Password</a></div>
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

export default UserSettings;