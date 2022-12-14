import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg'


function LeftNav() {
    return (
        <nav className="navbar navbar-dark align-items-start main-nav sidebar sidebar-dark accordion p-0">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-2 py-5 justify-content-center align-items-center flex-column" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><img src={Logo} style={{height: "42px", width: "42px"}} /></div>
                    <div className="mx-3 fw-bold d-r mt-2"><span>QUARK</span></div>
                </a>
                <div className="sidebar-divider my-0"></div>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><Link to={"/dashboard"} className="nav-link active d-flex align-items-center py-4 order">
                            <div className="me-3 nav-icon nav-dash"></div>
                            <span className="d-r">
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item"><Link to={"/add-truck"} className="nav-link d-flex align-items-center py-4">
                            <div className="nav-icon me-3 nav-order"></div>
                            <span className="d-r">
                                New order
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item"><Link to={"/profile"} className="nav-link d-flex align-items-center py-4">
                            <div className="me-3 nav-icon nav-profile"></div>
                            <span className="d-r">
                                Profile
                            </span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/completed-order"} className="nav-link d-flex align-items-center py-4">
                            <div className="nav-icon me-3 nav-complete"></div>
                            <span className="d-r text-start">
                                Completed&nbsp; &nbsp;order
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default LeftNav;