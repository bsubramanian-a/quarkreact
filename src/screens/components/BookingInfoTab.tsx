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
        </div>
    );
}

export default BookingInfoTab;