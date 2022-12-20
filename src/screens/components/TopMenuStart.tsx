import React from 'react';
import Notification from '../../assets/img/notification.svg'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, Navigate } from 'react-router-dom';

function TopMenuStart() {
    const { isLoggedIn } = useSelector((state: any) => state.auth);

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top pb-0">
            <div className="container-fluid pb-0">
                <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="pt-4">
                    <p className="mb-1 s-h pri-color fw-bold">Hello again!</p>
                    <p className="mb-0 l-h pri-color">tell us about your company</p>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <form className="d-none d-sm-inline-block me-auto ms-md-5 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group"><input className="bg-light form-control inputs border-0 small px-4 py-3 rounded-pill" type="text" placeholder="Search for ..." style={{ boxShadow: "0px 4px 16px #5469B140" }} /></div>
                    </form>
                    <ul className="navbar-nav flex-nowrap ms-auto">
                        <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                            <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                <form className="me-auto navbar-search w-100">
                                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search" />
                                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown no-arrow d-flex justify-content-center align-items-center mx-1">
                            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span>
                                <div className="rounded-circle d-flex justify-content-center align-items-center top-noti"><img src={Notification} /></div>
                            </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                    <h6 className="dropdown-header">alerts center</h6>
                                    <Link to={"#"} className="dropdown-item d-flex align-items-center">
                                        <div className="me-3">
                                            <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                        </div>
                                        <div><span className="small text-gray-500">December 12, 2019</span>
                                            <p>A new monthly report is ready to download!</p>
                                        </div>
                                    </Link>
                                    <Link to={"#"} className="dropdown-item d-flex align-items-center">
                                        <div className="me-3">
                                            <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                        </div>
                                        <div><span className="small text-gray-500">December 7, 2019</span>
                                            <p>$290.29 has been deposited into your account!</p>
                                        </div>
                                    </Link>
                                    <Link to={"#"} className="dropdown-item d-flex align-items-center">
                                        <div className="me-3">
                                            <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                        </div>
                                        <div><span className="small text-gray-500">December 2, 2019</span>
                                            <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                        </div>
                                    </Link>
                                    <Link to={"#"} className="dropdown-item text-center small text-gray-500">Show All Alerts</Link>
                                </div>
                            </div>
                        </li>
                        <div className="d-none d-sm-block topbar-divider"></div>                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopMenuStart;