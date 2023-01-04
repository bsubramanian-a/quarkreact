import React from 'react';
import DataTable from './DataTable';
import InTab from './InTab';

function BookingInfoTab() {
    return (
        <div className="tab-pane  active" role="tabpanel" id="tab-1">
            <InTab />
            <div>

                <DataTable/>
            </div>
            {/* <div className="row mb-5">
                <div className="col">
                    <div className="table-responsive" style={{boxShadow: "0px 2px 8px #0a288f12"}}>
                        <table className="table mb-0">
                            <thead>
                                <tr className="pri-color l-h fw-normal">
                                    <th className="px-3 border-0 bg-white py-3">Booking Number</th>
                                    <th className="border-0 bg-white py-3">Client Name</th>
                                    <th className="border-0 bg-white py-3">Client Phone number</th>
                                    <th className="border-0 bg-white py-3">Date of booking</th>
                                    <th className="border-0 bg-white py-3">Payment term</th>
                                    <th className="border-0 bg-white py-3">Number of truck</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-t">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h">3</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h bg-white">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h bg-white">3</td>
                                </tr>
                                <tr className="bg-t">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h">3</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h bg-white">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h bg-white">3</td>
                                </tr>
                                <tr className="bg-t">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h">3</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h bg-white">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h bg-white">3</td>
                                </tr>
                                <tr className="bg-t">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h">3</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h bg-white">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h bg-white">3</td>
                                </tr>
                                <tr className="bg-t">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h">3</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h bg-white">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h bg-white">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h bg-white">3</td>
                                </tr>
                                <tr className="bg-t">
                                    <td className="py-3 px-3 border-0 fw-normal fp-color l-h">TR - PO - 345</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">4578CS</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">26000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">263000KG</td>
                                    <td className="py-3 border-0 fw-normal fp-color l-h">20 Day</td>
                                    <td className="py-3 border-0 fw-normal pri-color l-h">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default BookingInfoTab;