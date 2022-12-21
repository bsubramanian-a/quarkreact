import React, {useState} from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { forget } from "../slices/auth";

function ForgetPassword() {
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

    const handleForget = (formValue: any) => {
        const { email } = formValue;
        setEmail(email);
        setIsLoading(true);
    
        dispatch(forget(email))
          .unwrap()
          .then((res: any) => {
            console.log("response coming in", res);
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
            setErrorMessage(error.data.status);
            setIsLoading(false);
          });
    };

      
    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 mt-5 mt-lg-0 mb-4 mb-lg-0 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5">
                        {
                            isSent && <div className="alert alert-success">
                            Password change link has been sent to your email successfully.
                        </div>
                        }
                        
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleForget}
                        >
                            <Form>
                                <div className="row mb-5">
                                    <div className="col col-12">
                                        <h1 className="fw-bold mb-0 h-h h-color">Forget Password</h1>
                                        <p className="s-h s-color mb-0">Please enter your email id to send a link to change password.</p>
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
                    </div>
                </div>
                <div className="col col-12 col-lg-6 imgRight vh-100"></div>
            </div>
        </div>

    );
}

export default ForgetPassword;