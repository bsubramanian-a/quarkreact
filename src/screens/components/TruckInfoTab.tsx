import React from 'react';
import InTab from './InTab';

function TruckInfoTab() {
    return (
        <div className="tab-pane" role="tabpanel" id="tab-4">
            <InTab />
            <div className="row mb-5">
                <div className="col">
                    <div className="table-responsive" style={{ boxShadow: "0px 2px 8px #0a288f12" }}>
                        <table className="table mb-0">
                            <thead>
                                <tr className="pri-color l-h fw-normal">
                                    <th className="px-3 border-0 bg-white py-3">Booking Number</th>
                                    <th className="border-0 bg-white py-3">Company Name</th>
                                    <th className="border-0 bg-white py-3">Company representer</th>
                                    <th className="border-0 bg-white py-3">Clearance Agent Name</th>
                                    <th className="border-0 bg-white py-3">Phone Number</th>
                                    <th className="border-0 bg-white py-3">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-t'>
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h"></td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h"></td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h"></td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h"></td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TruckInfoTab;