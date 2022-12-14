import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import OtpInput from 'react18-input-otp';

function Login() {
    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5">
                        <div className="row mb-5">
                            <div className="col col-12">
                                <h1 className="fw-bold mb-0 h-h h-color">Login</h1>
                                <p className="s-h s-color mb-0">To get access to Quark dashboard</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">Email address</p><input type="email" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">Password</p><input type="password" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col col-12 d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="formCheck-1" />
                                    <label className="form-check-label l-h c-color">Remember me</label>
                                </div><Link to={"#"} className="text-decoration-none l-h fp-color">Forgot your passwords?</Link>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col col-12"><button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type="button">Login</button></div>
                        </div>
                        <div className="row">
                            <div className="col col-12">
                                <p className="mb-0 text-center fw-normal c-color d-r">Do not have an account?&nbsp;<Link to={"#"} className="rl-color text-decoration-none">Register</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-lg-6 imgRight"></div>
            </div>
        </div>

    );
}

export default Login;