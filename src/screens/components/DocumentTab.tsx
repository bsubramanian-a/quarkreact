import React from 'react';
import InTab from './InTab';

function DocumentTab() {
    return (
        <div className="tab-pane" role="tabpanel" id="tab-5">
            <InTab />
            <p>Document Content</p>
        </div>
    );
}

export default DocumentTab;