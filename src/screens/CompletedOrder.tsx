import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import LeftNav from './components/LeftNav';
import TopMenu from './components/TopMenu';
import DocumentTab from './components/DocumentTab';
import TruckInfoTab from './components/TruckInfoTab';
import InfoTab from './components/InfoTab';
import CargoInfoTab from './components/CargoInfoTab';
import BookingInfoTab from './components/BookingInfoTab';

function CompletedOrder() {
    return (
        <div id="page-top" className="bg-m">
            <div id="wrapper" className="d-flex vh-100">
                <LeftNav />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopMenu />
                        <div className="container-fluid">
                            <div>
                                <ul className="nav nav-tabs border-0 overflow-scroll flex-nowrap d-flex justify-content-between align-items-stretch gap-2" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <Link to={"#tab-1"} className="nav-link active px-3 px-xxl-4 text-center h-100 d-flex align-items-center" role="tab" data-bs-toggle="tab">
                                            Booking information
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to={"#tab-2"} className="nav-link px-3 px-xxl-4 text-center h-100 d-flex align-items-center" role="tab" data-bs-toggle="tab">
                                            Cargo information
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to={"#tab-3"} className="nav-link px-3 px-xxl-4 text-center d-flex align-items-center" role="tab" data-bs-toggle="tab">
                                            Departure and Discharge information
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to={"#tab-4"} className="nav-link px-3 px-xxl-4 text-center h-100 d-flex align-items-center" role="tab" data-bs-toggle="tab">
                                            Truck information
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link to={"#tab-5"} className="nav-link px-3 px-xxl-4 h-100 d-flex align-items-center" role="tab" data-bs-toggle="tab">
                                            Document
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <BookingInfoTab />
                                    <CargoInfoTab />
                                    <InfoTab />
                                    <TruckInfoTab />
                                    <DocumentTab />
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

export default CompletedOrder;