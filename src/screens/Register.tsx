import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OtpInput from 'react18-input-otp';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from '../slices/auth';

function Register() {
    let navigate = useNavigate();
    const [successful, setSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailExist, setEmailExist] = useState(false);

    //const { message } = useSelector((state) => state?.message);
    const dispatch = useDispatch<any>();

    const initialValues = {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        agree: false
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        firstname: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid first name').max(255).required("This field is required!"),
        lastname: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid last name').max(255).required("This field is required!"),
        password: Yup.string().min(6).required("This field is required!"),
        agree: Yup.boolean().oneOf([true],'Please read and agree to terms and conditions!')
    });

    const handleRegister = (formValue: any) => {
        const { email, password, firstname, lastname } = formValue;

        setSuccessful(false);
        setIsLoading(true);
        console.log("handle register", email, password, firstname, lastname)

        dispatch(register({email, password, firstname, lastname}))
            .unwrap()
            .then((res:any) => {
                console.log("response coming in",res);
                if (res.status == 409) {
                    setIsLoading(false);
                    setSuccessful(false);
                    setEmailExist(true);
                }
                if (res.status == "success") {
                    setIsLoading(false);
                    setSuccessful(true);    
                    navigate('/verify-account');                
                }                
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
        >
            <Form>
                <div className="bg-white">
                    <div className="row vh-100 mx-0">
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0 mb-4 mb-lg-0 d-flex justify-content-center">
                            <div className="container my-auto mx-md-5">
                                <div className="row mb-5">
                                    <div className="col col-12">
                                        <h1 className="fw-bold mb-2 h-h h-color">Sign up with your email</h1>
                                        <p className="mb-0 fw-normal s-color d-r">
                                            Already have an account?&nbsp;
                                            <Link to={"#"} className="rl-color text-decoration-none">
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
                                        <Field type="text" className="w-100 px-4 py-3 t-input" name="firstname"/>
                                        <ErrorMessage
                                            name="firstname"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col col-12">
                                        <p className="mb-1 l-h l-color fw-normal">
                                            Last Name
                                        </p>
                                        <Field type="text" className="w-100 px-4 py-3 t-input" name="lastname" />
                                        <ErrorMessage
                                            name="lastname"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col col-12">
                                        <p className="mb-1 l-h l-color fw-normal">
                                            Email address
                                        </p>
                                        <Field type="email" className="w-100 px-4 py-3 t-input" name="email"/>
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0"
                                        />
                                        {emailExist && (
                                            <div className="alert alert-danger small border-0 py-1 mb-0"> Email already exist </div>
                                        )}
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col col-12">
                                        <p className="mb-1 l-h l-color fw-normal">
                                            Password
                                        </p>
                                        <Field type="password" className="w-100 px-4 py-3 t-input" name="password"/>
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col col-12">
                                        <div className="form-check">
                                            <Field className="form-check-input" type="checkbox" id="formCheck-1" name='agree'/>
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
                                        <ErrorMessage
                                            name="agree"
                                            component="div"
                                            className="alert alert-danger small border-0 py-1 mb-0 mt-3"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    {isLoading && (
                                        <div>Registering...</div>
                                    )}
                                    {!isLoading && (
                                        <div className="col col-12">
                                            {isLoading ? (
                                                <div>Registering...</div>
                                            ): <button className="btn btn-primary w-100 rounded-pill py-3 fw-bold" type="submit">Create account</button>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 imgTRight vh-100"></div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default Register;