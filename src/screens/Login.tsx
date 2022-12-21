import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import OtpInput from 'react18-input-otp';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../slices/auth';
import * as Yup from "yup";

function Login() {
    let navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [verify, setVerify] = useState('');
    const { isLoggedIn } = useSelector((state: any) => state.auth);
    console.log("islogged", isLoggedIn);

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState();
    const [isError, setIsError] = useState(false);
    const [errormessage, setErrorMessage] = useState('');
    const dispatch = useDispatch<any>();

    useEffect(() => {
        const verified = searchParams.get("verified");
        setVerify(verified ?? '');
    }, [searchParams]);

    const handleLogin = (formValue: any) => {
        const { email, password } = formValue;
        setEmail(email);
        setIsLoading(true);

        dispatch(login({ email, password }))
            .unwrap()
            .then((res: any) => {
                console.log("res", res);
                if (res?.data?.status == 409) {
                    setIsLoading(false);
                    setErrorMessage(res.data.message);
                    setIsError(true);
                }else if (res.status == 200) {
                    setIsLoading(false);
                    navigate('/')
                }else{
                    setIsLoading(false);
                    setErrorMessage("Please try again");
                }
            })
            .catch((error:any) => {
                console.log("login error", error)
                setErrorMessage(error.data.message);
                setIsError(true);
                setIsLoading(false);
            });
    };

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .required("This field is required!")
    });

    if (isLoggedIn) {
        return <Navigate to="/profile" />;
    }

    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 mt-5 mt-lg-0 mb-4 mb-lg-0 d-flex justify-content-center">
                    <div className="container my-auto mx-md-5">
                        {verify && <div className='alert alert-danger'>
                            {verify == 'false' ? 'Verification failed please try again!' : 'Verification successfull, please login!'}
                        </div>}
                        {errormessage && <div className='alert alert-danger'>{errormessage}</div>}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form>
                                <div className="row mb-5">
                                    <div className="col col-12">
                                        <h1 className="fw-bold mb-0 h-h h-color">Login</h1>
                                        <p className="s-h s-color mb-0">To get access to Quark dashboard</p>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col col-12">
                                        <p className="mb-1 l-h l-color fw-normal">Email address</p><Field name="email" type="email" className="w-100 px-4 py-3 t-input" />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col col-12">
                                        <p className="mb-1 l-h l-color fw-normal">Password</p><Field name="password" type="password" className="w-100 px-4 py-3 t-input" />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col col-12 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <Field className="form-check-input" name="remember" type="checkbox" id="formCheck-1" />
                                            <label className="form-check-label l-h c-color">Remember me</label>
                                        </div><Link to={"/forget-password"} className="text-decoration-none l-h fp-color">Forgot your passwords?</Link>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col col-12">
                                        {isLoading ? (
                                            <div>Logging in...</div>
                                        ): <button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type="submit">Login</button>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-12">
                                        <p className="mb-0 text-center fw-normal c-color d-r">Do not have an account?&nbsp;<Link to={"register"} className="rl-color text-decoration-none">Register</Link> </p>
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

export default Login;