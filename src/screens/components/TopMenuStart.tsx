import React from 'react';

function TopMenuStart() {
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
            </div>
        </nav>
    );
}

export default TopMenuStart;