import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import Avatars from '../assets/img/avatars/avatar1.jpeg'

function ChangePassword() {
    return (
        <div id="page-top" className="bg-m">
            <div id="wrapper" className="d-flex">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className="bg-color">
                        <TopMenu />
                        <div className="container-fluid mb-5">
                            <div className="row">
                                <div className="col">
                                    <div className="card px-lg-5 card-sp">
                                        <div className="card-body pt-5 px-lg-5 mx-lg-5">
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Old Password</p><input type="text" className="w-100 px-4 py-3 t-input pri-color fw-medium l-h text-center" />
                                                </div>
                                            </div>
                                            <div className="row mb-5 justify-content-between align-items-center">
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">New Password</p><input type="text" className="w-100 px-4 py-3 t-input pri-color fw-medium l-h text-center" />
                                                </div>
                                                <div className="col col-12 col-lg-5">
                                                    <p className="mb-1 l-h l-color fw-normal">Confirm Password</p><input type="text" className="w-100 px-4 py-3 t-input pri-color fw-medium l-h text-center" />
                                                </div>
                                            </div>
                                            <div className="row justify-content-between align-items-center mb-5">
                                                <div className="col col-12 col-lg-5 mb-3"><a className="rl-color text-decoration-none" href="/user-settings">Back to Settings</a></div>
                                            </div>
                                            <div className="row justify-content-between align-items-center mb-3">
                                                <div className="col col-12 col-lg-5"></div>
                                                <div className="col col-12 col-lg-5"><button className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" type="button">Update</button></div>
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

export default ChangePassword;