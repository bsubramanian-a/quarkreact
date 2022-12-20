import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import OtpInput from 'react18-input-otp';

function VerifyAccount() {
    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 my-5 my-lg-0 py-5 py-lg-0 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5 py-5 py-lg-0">
                        <div className="row mb-5">
                            <div className="col col-12">
                                <h1 className="fw-medium mb-2 h-h h-color">Verify your account</h1>
                                <p className="mb-0 fw-normal fp-color h-ss">Account activation link has been sent to your email address you provide.</p>
                            </div>
                        </div>
                        <div className="row mb-0">
                            <div className="col mb-3 col-12">
                                <Link to={"#"} className="fp-color rl-color text-decoration-none h-ss">
                                    Didn't get the email? Send it again
                                </Link>
                            </div>
                            <div className="col col-12">
                                <p className="mb-0 fw-normal c-color d-r">
                                    Back to&nbsp;
                                    <Link to={"/"} className="rl-color text-decoration-none">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-lg-6 imgTRight vh-100"></div>
            </div>
        </div>
    );
}

export default VerifyAccount;