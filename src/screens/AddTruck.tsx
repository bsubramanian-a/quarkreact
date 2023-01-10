import React, {useRef,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import BookImg from '../assets/img/order-img/bookInfo.svg'
import { useGetCompanyQuery } from '../services/company-service';
import { useCreateTruckMutation } from '../services/truck-service';
import * as Yup from "yup";
import ContactInput from './components/PhoneInput';

function AddTruck() {
    let navigate = useNavigate();
    const [ createTruck, isLoading, isFetching, isError, error ]:any = useCreateTruckMutation();
    // console.log("trucks companies", companies);
    const hiddenFileInput = useRef<any>(null);
    const [phone, setPhone] = useState<any>(null);

    const initialValues = {
        truck_no: "",
        transit_no: "",
        driver_name: "",
        phone_number: "",
        dob: "",
        license_validity: "",
        license_no: "",
        id_no: "",
        doc: null
    };

    const validationSchema = Yup.object().shape({
        truck_no: Yup.string()
            .required("This field is required!"),
        transit_no: Yup.string()
            .required("This field is required!"),
        driver_name: Yup.string()
            .required("This field is required!"),
        dob: Yup.string()
            .required("This field is required!"),
        license_validity: Yup.string()
            .required("This field is required!"),
        license_no: Yup.string()
            .required("This field is required!"),
        id_no: Yup.string()
            .required("This field is required!"),
        doc: Yup.mixed().required('A document file is required')
            // .test('fileSize', 'File too large', (value) => value === null || (value && value.size <= 10485760))
            // .test(
            //     'fileFormat',
            //     'Unsupported file type',
            //     (value) => value === null || (value && ['application/msword', 'application/pdf'].includes(value.type))
            // )
            .test("fileSize", "File Size is too large", (value) => {
                if(value && value?.length>0){
                  for (let i=0;i<value.length;i++){
                   if(value[i].size>2097152){
                     return false;
                   }
                  }
               }
               return true;
            })
            .test("fileType", "Unsupported File Format", (value) =>{
                if(value && value.length>0){
                    for (let i=0;i<value.length;i++){
                        if(value[i].type!= "application/msword" && value[i].type!= "application/pdf"){
                            return false;
                        }
                    }
                }
                return true;
            }),
    });

    const handleSubmit = async(formValue: any) => {
        let formData = new FormData();
        formData.append('phone_number', phone);
        formData.append('truck_no', formValue.truck_no);
        formData.append('id_no', formValue.id_no);
        formData.append('license_no', formValue.license_no);
        formData.append('license_validity', formValue.license_validity);
        formData.append('dob', formValue.dob);
        formData.append('driver_name', formValue.driver_name);
        formData.append('transit_no', formValue.transit_no);
        formData.append('company_id', formValue.company_id);

        console.log("form doc", formValue.doc)

        for (let i = 0; i < formValue.doc.length; i++) {
            let file = formValue.doc.item(i)
            formData.append(`doc`, file);
        }

        const res = await createTruck(formData);
        console.log("res", res);

        if(res?.data?.status == 200){
            navigate('/truck-information')
        }else{
           console.log("error", res);
        }
    };

    if (isError) {
        console.log({ error });
        return <div>{error?.status}</div>;
    }

    const handleClick = (event:any) => {
        console.log("handle click", hiddenFileInput.current)
        if(hiddenFileInput.current) hiddenFileInput.current.click();
    };

    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className='bg-m'>
                        <TopMenu />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {(formik) => {
                            return (
                                <Form>
                                    <div className="container-fluid px-5">
                                        <div className="row mt-5 mb-3">
                                            <div className="col d-flex justify-content-start align-items-center gap-3">
                                                <img src={BookImg} />
                                                <div>
                                                    <p className="fw-bold s-h pri-color mb-0">
                                                        Trucks information
                                                    </p>
                                                </div>
                                                <input
                                                    id="file"
                                                    name="document"
                                                    type="file"
                                                    onChange={(event:any) => {
                                                        const files:any = event.target.files;
                                                        console.log("files", files);
                                                        formik.setFieldValue("doc", files);
                                                    }}
                                                    ref={hiddenFileInput}
                                                    style={{display: 'none'}}
                                                    accept="application/msword, application/pdf"
                                                    multiple
                                                />
                                                <button className="btn btn-primary rounded-pill p-size fw-medium px-4" type="button" onClick={handleClick}>
                                                    Upload Driver Document
                                                </button>
                                                <ErrorMessage
                                                    name="doc"
                                                    component="div"
                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col">
                                                <div className="card px-lg-5 py-3">
                                                    <div className="card-body px-xl-5 mx-xl-5">
                                                        <div className="row mb-5 justify-content-between align-items-center">
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Truck Number
                                                                </p>
                                                                <Field type="text" name="truck_no" className="w-100 px-4 py-3 t-input" />
                                                                <ErrorMessage
                                                                    name="truck_no"
                                                                    component="div"
                                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                                />
                                                            </div>
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Driver Name
                                                                </p>
                                                                <Field type="text" name="driver_name" className="w-100 px-4 py-3 t-input" />
                                                                <ErrorMessage
                                                                    name="driver_name"
                                                                    component="div"
                                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-5 justify-content-between align-items-center">
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    ID Number
                                                                </p>
                                                                <Field type="text" name="id_no" className="w-100 px-4 py-3 t-input" />
                                                                <ErrorMessage
                                                                    name="id_no"
                                                                    component="div"
                                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                                />
                                                            </div>
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Phone number
                                                                </p>
                                                                <ContactInput phone={phone} setPhone={setPhone}></ContactInput>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-5 justify-content-between align-items-center">
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Transit number
                                                                </p>
                                                                <div className="dropdown w-100">
                                                                    <select name='transit_no' className="t-input px-4 py-3 w-100 form-select select_option" aria-label="Default select example" onChange={(event:any) => {
                                                                            formik.setFieldValue("transit_no", event.target.value);
                                                                        }}>
                                                                        <option value="" selected>Select transit number</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                    </select>
                                                                    <ErrorMessage
                                                                        name="transit_no"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Date of Birth
                                                                </p>
                                                                <Field name="dob" className="t-input px-4 py-3 w-100 pri-color d-flex justify-content-between align-items-center" type="date" onChange={(event:any) => {
                                                                    formik.setFieldValue("dob", event.target.value);
                                                                }}/>
                                                                <ErrorMessage
                                                                    name="dob"
                                                                    component="div"
                                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-5 justify-content-between align-items-center">
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Driving Licence Number
                                                                </p>
                                                                <Field name="license_no" type="text" className="w-100 px-4 py-3 t-input" />
                                                                <ErrorMessage
                                                                    name="license_no"
                                                                    component="div"
                                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                                />
                                                            </div>
                                                            <div className="col col-12 col-lg-5">
                                                                <p className="mb-1 l-h l-color fw-normal">
                                                                    Validity of Driving Licence
                                                                </p>
                                                                <Field name="license_validity" className="t-input px-4 py-3 w-100 pri-color d-flex justify-content-between align-items-center" type="date" onChange={(event:any) => {
                                                                    formik.setFieldValue("license_validity", event.target.value);
                                                                }}/>
                                                                <ErrorMessage
                                                                    name="license_validity"
                                                                    component="div"
                                                                    className="alert alert-danger small border-0 py-1 mb-0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-5 justify-content-between align-items-center">
                                                            <div className="col col-12 col-lg-5"></div>
                                                            <div className="col col-12 col-lg-5">
                                                                <button className="btn btn-primary w-100 px-4 py-3 rounded-pill fw-medium" type="submit">
                                                                    Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}}
                        </Formik>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default AddTruck;