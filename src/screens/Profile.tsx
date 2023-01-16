import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenuStart from './components/TopMenuStart';
import ContactInput from './components/PhoneInput';
import { useCreateCompanyMutation } from '../services/company-service';
import { useGetCompanyQuery } from '../services/company-service';
import * as Yup from "yup";

function Profile() {
    let navigate = useNavigate();
    const [ createCompany, {isLoading} ]:any = useCreateCompanyMutation();
    const { data: companies = [], isFetching, isError, error }:any = useGetCompanyQuery(1);
    const [isEditable, setIsEditable] = useState(false);
    const [mdPhone, setMdPhone] = useState(null);
    const [companyPhone, setCompanyPhone] = useState(null);
    const [opPhone, setOpPhone] = useState(null);
    const [agentPhone, setAgentPhone] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const initialValues = {
        name: companies?.name || "",
        address: companies?.address || "",
        reg_no: companies?.reg_no || "",
        trucks_owned: companies?.trucks_owned || "",
        trucks_partnership: companies?.trucks_partnership || "",
        phone_number: companies?.phone_number || "",
        md: companies?.md || "",
        md_phone: companies?.md_phone || "",
        op: companies?.op || "",
        op_phone: companies?.op_phone || "",
        overseas_agent: companies?.overseas_agent || "",
        overseas_agent_phone: companies?.overseas_agent_phone || "",
        latitude: companies?.latitude || 0,
        longitude: companies?.longitude || 0,
    };

    useEffect(() => {
        setAgentPhone(companies?.overseas_agent_phone || '91');
        setCompanyPhone(companies?.phone_number || '91');
        setOpPhone(companies?.op_phone || '91');
        setMdPhone(companies?.md_phone || '91');
    }, [companies])

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("This field is required!"),
        address: Yup.string()
            .required("This field is required!"),
        reg_no: Yup.string()
            .required("This field is required!"),
        trucks_owned: Yup.string()
            .required("This field is required!"),
        trucks_partnership: Yup.string()
            .required("This field is required!"),
        md: Yup.string()
            .required("This field is required!"),
        op: Yup.string()
            .required("This field is required!"),
        overseas_agent: Yup.string()
            .required("This field is required!")
    });

    const handleSubmit = async(formValue: any) => {
        // const { name, address, reg_no, trucks_owned, trucks_partnership, phone_number, md, md_phone, op, op_phone, overseas_agent, overseas_agent_phone } = formValue;
        formValue.latitude = 40.799640;
        formValue.longitude = -73.995620;
        formValue.overseas_agent_phone = agentPhone;
        formValue.op_phone = opPhone;
        formValue.md_phone = mdPhone;
        formValue.phone_number = companyPhone;
        setErrMsg("");
        const res = await createCompany(formValue);
        // console.log("res", res);

        if(res?.data?.status == 200){
            navigate('/truck-information')
        }else{
            setErrMsg(res?.data?.message);
        }
    };

    return (
        <div id="page-top" className='bg-white'>
            <div id="wrapper" className='d-flex vh-100'>
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className='bg-color'>
                        <TopMenuStart />
                        <div className="container-fluid">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="card px-lg-5">
                                                <div className="card-body px-lg-5 mx-lg-5">
                                                    {errMsg && <div className="alert alert-danger small border-0 py-1 mb-0">{errMsg}</div>}
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Company name</p>
                                                            <Field type="text" name='name' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="name"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5">
                                                            <p className="mb-1 l-h l-color fw-normal">Managing Director Full Name</p>
                                                            <Field type="text" name='md' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="md"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Registration Number</p>
                                                            <Field type="text" name='reg_no' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="reg_no"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5">
                                                            <p className="mb-1 l-h l-color fw-normal">Managing Director Phone Number </p>
                                                            <ContactInput phone={mdPhone} setPhone={setMdPhone}></ContactInput>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Number of Trucks (Company Ownership)</p>
                                                            <Field type="number" name='trucks_owned' min="1" max="1000" className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="trucks_owned"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5">
                                                            <p className="mb-1 l-h l-color fw-normal">Operator Full Name</p>
                                                            <Field type="text" name='op' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="op"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Number of Trucks (Company Partnership)</p>
                                                            <Field type="number" name='trucks_partnership' min="1" max="1000" className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="trucks_partnership"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5">
                                                            <p className="mb-1 l-h l-color fw-normal">Operator Phone Number </p>
                                                            <ContactInput phone={opPhone} setPhone={setOpPhone}></ContactInput>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Company Contact number </p>
                                                            <ContactInput phone={companyPhone} setPhone={setCompanyPhone}></ContactInput>
                                                        </div>
                                                        <div className="col col-12 col-lg-5">
                                                            <p className="mb-1 l-h l-color fw-normal">Overseas Agent </p>
                                                            <Field type="text" name='overseas_agent' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="overseas_agent"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Company Address </p>
                                                            <Field type="text" name='address' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="address"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5">
                                                            <p className="mb-1 l-h l-color fw-normal">Overseas Agent Phone Number </p>
                                                            <ContactInput phone={agentPhone} setPhone={setAgentPhone}></ContactInput>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Country </p>
                                                            <Field type="text" name='address' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="address"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">City </p>
                                                            <Field type="text" name='address' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="address"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                            <p className="mb-1 l-h l-color fw-normal">Postal Code </p>
                                                            <Field type="text" name='address' className="w-100 px-4 py-3 t-input" />
                                                            <ErrorMessage
                                                                name="address"
                                                                component="div"
                                                                className="alert alert-danger small border-0 py-1 mb-0"
                                                            />
                                                        </div>
                                                        <div className="col col-12 col-lg-5 mb-5 mb-lg-0">
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5 justify-content-between align-items-center">
                                                        <div className="col col-12 col-lg-5"></div>
                                                        <div className="col col-12 col-lg-5">
                                                            {(companies?.name && !isEditable) ? 
                                                                <span className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" onClick={() => {setIsEditable(true)}}>
                                                                    Edit Profile
                                                                </span>
                                                                 :
                                                                <button className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" type="submit">
                                                                    {isLoading ? "Updating..." : "Submit"}
                                                                </button>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
                <Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default Profile;