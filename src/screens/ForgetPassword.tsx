import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import OtpInput from 'react18-input-otp';

function ForgetPassword() {
    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 mt-5 mt-lg-0 mb-4 mb-lg-0 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5">
                        <div className="row mb-5">
                            <div className="col col-12">
                                <h1 className="fw-bold mb-0 h-h h-color">Forget Password</h1>
                                <p className="s-h s-color mb-0">Please enter your email id to send a link to change password.</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">Email address</p><input type="email" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col col-12"><button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type="button">Submit</button></div>
                        </div>
                        <div className="row">
                            <div className="col col-12">
                                <p className="mb-0 text-center fw-normal c-color d-r">Back to&nbsp;<Link to={"/"} className="rl-color text-decoration-none">Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-lg-6 imgRight vh-100"></div>
            </div>
        </div>

    );
}

export default ForgetPassword;