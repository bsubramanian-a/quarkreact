import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import BookImg from '../assets/img/order-img/bookInfo.svg'

function Document() {
    return (
        <div id="page-top" className="bg-white">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className='bg-m'>
                        <TopMenu />
                        <div className="container-fluid px-5">
                            <div className="row mt-5 mb-3">
                                <div className="col col-12 d-flex justify-content-start align-items-center gap-3"><img src={BookImg} />
                                    <div>
                                        <p className="fw-bold s-h pri-color mb-0">Download customs documents</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div className="table-responsive" style={{ boxShadow: "0px 2px 8px #0a288f12", borderRadius: "10px" }}>
                                        <table className="table mb-0">
                                            <thead>
                                                <tr className="pri-color l-h fw-normal">
                                                    <th className="py-3 border-0 bg-white px-3" style={{ width: "15%" }}>File name</th>
                                                    <th className="border-0 py-3 bg-white" style={{ width: "15%" }}>File size</th>
                                                    <th className="border-0 py-3 bg-white" style={{ width: "20%" }}>Date uploaded</th>
                                                    <th className="border-0 py-3 bg-white" style={{ width: "30%" }}>Uploaded by</th>
                                                    <th className="text-white border-0 py-3 bg-white" style={{ width: "15%" }}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">MSDS</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">1.3MB</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Jan 5, 2022/ 10:12 AM</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Sacowd.company@gmail.com</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">Comercial invoice&nbsp;</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">1.3MB</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Jan 5, 2022/ 10:12 AM</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Sacowd.company@gmail.com</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">Packing list&nbsp;</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><span className='span-c'>1.3MB</span></td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><span className='span-c'>Jan 5, 2022/ 10:12 AM</span></td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><span className='span-c'>Sacowd.company@gmail.com</span></td>
                                                    <td className="py-3 border-0"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">Export declaration</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">1.3MB</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Jan 5, 2022/ 10:12 AM</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Sacowd.company@gmail.com</td>
                                                    <td className="py-3 border-0"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">Other file </td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><span className='span-c'>1.3MB</span></td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><span className='span-c'>Jan 5, 2022/ 10:12 AM</span></td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><span className='span-c'>Sacowd.company@gmail.com</span></td>
                                                    <td className="py-3 border-0"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-3">
                                <div className="col col-12 d-flex justify-content-start align-items-center gap-3"><img src={BookImg} />
                                    <div>
                                        <p className="fw-bold s-h pri-color mb-0">Upload customs documents</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div className="table-responsive" style={{ boxShadow: "0px 2px 8px #0a288f12", borderRadius: "10px" }}>
                                        <table className="table mb-0">
                                            <thead>
                                                <tr className="pri-color l-h fw-normal">
                                                    <th className="border-0 py-3 bg-white px-3" style={{ width: "20%" }}>File name</th>
                                                    <th className="border-0 py-3 bg-white" style={{ width: "15%" }}>File size</th>
                                                    <th className="border-0 py-3 bg-white" style={{ width: "20%" }}>Date uploaded</th>
                                                    <th className="border-0 py-3 bg-white" style={{ width: "30%" }}>Uploaded by</th>
                                                    <th className="text-white border-0 py-3 bg-white" style={{ width: "15%" }}></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">CMR file</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">1.3MB</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Jan 5, 2022/ 10:12 AM</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Sacowd.company@gmail.com</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                                <tr className='table-bg'>
                                                    <td className="py-3 border-0 fw-normal c-color px-3">Bill Of Lading</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">1.3MB</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Jan 5, 2022/ 10:12 AM</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal">Sacowd.company@gmail.com</td>
                                                    <td className="py-3 border-0 fp-color t-ts fw-normal"><button className="btn btn-primary rounded-pill p-size text-uppercase fw-medium px-4 btn-download" type="button">Download</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"#page-top"} className="border rounded d-inline scroll-to-top">
                    <i className="fas fa-angle-up"></i>
                </Link>
            </div>
        </div>
    );
}

export default Document;