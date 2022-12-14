import React from 'react';
import EditC from '../../assets/img/completed-order/c-edit.svg'
import ReloadC from '../../assets/img/completed-order/c-reload.svg'
import PrinterC from '../../assets/img/completed-order/c-printer.svg'
import Calender from '../../assets/img/calender.svg'
import { Link } from 'react-router-dom';

function InTab() {
    return (
        <div className="row mt-5 mb-3">
            <div className="col col-12 col-lg-4 d-flex justify-content-start align-items-center gap-3">
                <button className="btn btn-primary btn-size d-flex justify-content-center align-items-center" type="button">
                    <img src={EditC} />
                </button>
                <button className="btn btn-primary btn-size d-flex justify-content-center align-items-center" type="button">
                    <img src={ReloadC} />
                </button>
                <button className="btn btn-primary btn-size d-flex justify-content-center align-items-center" type="button">
                    <img src={PrinterC} />
                </button>
            </div>
            <div className="col col-12 col-lg-8 d-flex justify-content-end align-items-center gap-3">
                <form className="w-50">
                    <div className="input-group">
                        <input className="bg-light form-control bg-white ph-t border-0 t-ts px-4 py-3 input-new" type="text" placeholder="search" />
                    </div>
                </form>
                <div className="form-group">
                    <div id="datetimepicker-3" className="input-group date">
                        <input type="text" className="form-control bg-white border-0 t-ts px-4 py-3 ph-t input-new" placeholder="This month" />
                        <span className="input-group-addon">&nbsp;
                            <span className="glyphicon glyphicon-calendar">
                            </span>
                        </span>
                        <img className="position-absolute img-c" src={Calender} />
                    </div>
                </div>
                <div className="dropdown"><button className="btn btn-primary dropdown-toggle bg-white border-0 t-ts px-4 py-3 d-flex justify-content-between align-items-center gap-3 btn-download" aria-expanded="false" data-bs-toggle="dropdown" type="button">All booking </button>
                    <div className="dropdown-menu">
                        <Link to={"#"} className="dropdown-item">First Item</Link>
                        <Link to={"#"} className="dropdown-item">Second Item</Link>
                        <Link to={"#"} className="dropdown-item">Third Item</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InTab;