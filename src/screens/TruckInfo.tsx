import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import BookImg from '../assets/img/order-img/bookInfo.svg';
import Printer from '../assets/img/truck-img/printer.svg';
import Edit from '../assets/img/truck-img/edit.svg';
import Delete from '../assets/img/truck-img/delete.svg';
import { useGetTrucksQuery } from '../services/truck-service';
import DataTable from './components/DataTable';

function TruckInfo() {
    const { data: trucks = [], isLoading, isFetching, isError, error }:any = useGetTrucksQuery(1);
    console.log("trucks", trucks);

    if (isLoading || isFetching) {
        return <div className='loading_text'>loading...</div>;
    }

    if (isError) {
        console.log({ error });
        return <div>{error?.status}</div>;
    }

    const header = [
        { title: "Truck Number", prop: "truck_no" },
        { title: "Driver Name", prop: "driver_name" },
        { title: "Phone number", prop: "phone_number" },
        { title: "ID Number", prop: "id_no" },
        { title: "Transit number", prop: "transit_no" },
        { title: "Loading time", prop: "loading_time" },
        { title: "Document", prop: "documents" },
    ];

    // const body = data.map((item: any) => {
    //     return {
    //         name: item.name,
    //         booking_no: item.booking_no,
    //         client_name: item.client_name,
    //         client_phone: item.client_phone,
    //         date_of_booking: item.date_of_booking,
    //         payment_id: item.payment_id,
    //         no_of_trucks: item.no_of_trucks,
    //     };
    // });

    return (
        <div id="page-top" className='bg-white'>
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content" className="bg-color">
                        <TopMenu />
                        <div className="container-fluid vh-100">
                            <div className="row mt-5 mb-3">
                                <div className="col col-12 col-lg-6 mb-3 mb-lg-0 d-md-flex justify-content-between justify-content-lg-start align-items-center gap-3">
                                    <div>
                                        <p className="fw-bold s-h pri-color mb-0 d-flex justify-content-start align-items-center gap-3 mb-3 mb-md-0"><img src={BookImg} /> Trucks information</p>
                                    </div><button className="btn btn-primary rounded-pill p-size fw-medium px-4 py-2" type="button"><Link className='text-decoration-none btn-color' to={"/add-truck"}>+ Add new truck</Link></button>
                                </div>
                                <div className="col col-12 col-lg-6 d-flex justify-content-end align-items-center gap-3">
                                    <button className="btn btn-primary btn-size d-flex justify-content-center align-items-center" type="button">
                                        <img src={Delete} />
                                    </button>
                                    <button className="btn btn-primary btn-size d-flex justify-content-center align-items-center" type="button">
                                        <img src={Edit} />
                                    </button>
                                    <button className="btn btn-primary btn-size d-flex justify-content-center align-items-center" type="button">
                                        <img src={Printer} />
                                    </button>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col">
                                    <div className="table-responsive" style={{ boxShadow: "0px 2px 8px #0a288f12" }}>
                                        {/* <table className="table mb-0">
                                            <thead>
                                                <tr className="pri-color l-h fw-normal">
                                                    <th className="border-0 bg-white py-3">Truck Number</th>
                                                    <th className="border-0 bg-white py-3">Driver Name</th>
                                                    <th className="border-0 bg-white py-3">Phone number</th>
                                                    <th className="border-0 bg-white py-3">ID Number</th>
                                                    <th className="border-0 bg-white py-3">Transit number</th>
                                                    <th className="border-0 bg-white py-3">Loading time</th>
                                                    <th className="border-0 bg-white py-3">Document</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ backgroundColor: "#F4F7FA" }}>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                </tr>
                                                <tr style={{ backgroundColor: "#F4F7FA" }}>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                    <td className="py-4 border-0"></td>
                                                </tr>
                                                <tr>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                    <td className="py-4 border-0 bg-white"></td>
                                                </tr>
                                            </tbody>
                                        </table> */}

                                        <DataTable header={header} data={trucks?.data}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default TruckInfo;