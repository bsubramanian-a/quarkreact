import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import OtpInput from 'react18-input-otp';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { verifyEmail } from "../slices/auth";

function VerifyAccount() {
    const [isVerifyEmail, setIsVerifyEmail] = useState(false);
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errormessage, setErrorMessage] = useState();
    const [email, setEmail] = useState();
    const [isSent, setIsSent] = useState(false);

    const dispatch = useDispatch<any>();

    const initialValues = {
        email: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
    });

    const sendEmail = () => {
        setIsVerifyEmail(true)
    }

    const verifyEmails = (formValue:any) => {
        const { email } = formValue;
        console.log("email", email);
        setIsLoading(true);
    
        dispatch(verifyEmail(email))
          .unwrap()
          .then((res: any) => {
            if (res.status == 401) {
              setIsLoading(false);
              setErrorMessage(res.data.status);
            }
            if (res.status == "success") {
                setIsSent(true);
                setIsLoading(false);
            }
        })
        .catch((error:any) => {
            setIsLoading(false);
            setErrorMessage(error.data.status);
        });
    }

    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 my-5 my-lg-0 py-5 py-lg-0 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5 py-5 py-lg-0">
                        <div className="row mb-5">
                            <div className="col col-12">
                                    {
                                        isSent && <div className="alert alert-success">
                                            veriy email sent successfully.
                                        </div>
                                    }
                                    {errormessage && (
                                        <div className="alert alert-danger small border-0 py-1 mb-0"> {errormessage} </div>
                                    )}
                                <h1 className="fw-medium mb-2 h-h h-color">Verify your account</h1>
                                <p className="mb-0 fw-normal fp-color h-ss">Account activation link has been sent to your email address you provide.</p>
                            </div>
                        </div>
                        <div className="row mb-0">
                            {
                                !isVerifyEmail ? <div className="col mb-3 col-12">
                                <span onClick={sendEmail} className="fp-color rl-color text-decoration-none h-ss">
                                    Didn't get the email? Send it again
                                </span>
                            </div> :
                                   <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={verifyEmails}
                                    >
                                        <Form>
                                            <div className="row mb-5">
                                                <div className="col col-12">
                                                    <h1 className="fw-bold mb-0 h-h h-color">Resend Verification Email</h1>
                                                    <p className="s-h s-color mb-0">Please enter your email id to send the verification link.</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col col-12">
                                                    <p className="mb-1 l-h l-color fw-normal">Email address</p><Field name="email" type="email" className="w-100 px-4 py-3 t-input" />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="alert alert-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col col-12">
                                                {isLoading ? (
                                                    <button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type='button'>Sending email</button>
                                                    ): <button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type="submit">Submit</button>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col col-12">
                                                    <p className="mb-0 text-center fw-normal c-color d-r">Back to&nbsp;<Link to={"/"} className="rl-color text-decoration-none">Login</Link> </p>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                            }
                            
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