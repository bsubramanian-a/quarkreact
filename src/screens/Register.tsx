import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import OtpInput from 'react18-input-otp';

function Register() {
    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col-12 col-lg-6 mt-5 mt-lg-0 mb-4 mb-lg-0 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5">
                        <div className="row mb-5">
                            <div className="col col-12">
                                <h1 className="fw-bold mb-2 h-h h-color">Sign up with your email</h1>
                                <p className="mb-0 fw-normal s-color d-r">
                                    Already have an account?&nbsp;
                                    <Link to={"/"} className="rl-color text-decoration-none">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">
                                    First Name
                                </p>
                                <input type="email" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">
                                    Last Name
                                </p>
                                <input type="email" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">
                                    Email address
                                </p>
                                <input type="email" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col col-12">
                                <p className="mb-1 l-h l-color fw-normal">
                                    Password
                                </p>
                                <input type="password" className="w-100 px-4 py-3 t-input" />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="formCheck-1" />
                                    <label className="form-check-label l-h c-color">
                                        I agree to the&nbsp;
                                        <Link to={"#"} className="text-decoration-none rl-color">
                                            Terms of Service
                                        </Link>
                                            &nbsp;and&nbsp;
                                        <Link to={"#"} className="text-decoration-none rl-color">
                                            Privacy and Policy
                                        </Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col col-12"><button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type="button"><Link className='text-decoration-none btn-color' to={"/verify-account"}>Create account</Link></button></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 imgTRight vh-100"></div>
            </div>
        </div>
    );
}

export default Register;