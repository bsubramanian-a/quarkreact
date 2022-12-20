import React, {useState, useEffect} from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { resetpassword } from "../slices/auth";

function ResetPassword() {
    let navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [errormessage, setErrorMessage] = useState();
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [otp, setOtp] = useState('');

    const dispatch = useDispatch<any>();

    useEffect(() => {
        const email = searchParams.get("email");
        const otp = searchParams.get("token");
       console.log("otp", otp, "email", email);
       setEmail(email ?? '');
       setOtp(otp ?? '');
    }, [searchParams]);

    const initialValues = {
        password: "",
        confirmPassword: ""
    };

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("This field is required!"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const handleReset = (formValue: any) => {
        const { password, confirmPassword } = formValue;
        console.log("password", password, 'confirm', confirmPassword)

        setIsLoading(true);
    
        dispatch(resetpassword({email, otp, password, confirmPassword}))
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
          .catch(() => {
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
                                Password changed successfully.
                            </div>
                        }
                        {errormessage && (
                            <div className="alert alert-danger small border-0 py-1 mb-0"> {errormessage} </div>
                        )}
                        
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleReset}
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
                                        <p className="mb-1 l-h l-color fw-normal">Password</p>
                                        <Field name="password" type="password" className="w-100 px-4 py-3 t-input" />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col col-12">
                                        <p className="mb-1 l-h l-color fw-normal">Confirm Password</p>
                                        <Field name="confirmPassword" type="password" className="w-100 px-4 py-3 t-input" />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="div"
                                            className="alert alert-danger"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col col-12">
                                    {isLoading ? (
                                        <button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type='button'>Changing password</button>
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

export default ResetPassword;