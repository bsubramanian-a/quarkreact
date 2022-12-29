import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Verified() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [verify, setVerify] = useState('');

    useEffect(() => {
        const verified = searchParams.get("verified");
        setVerify(verified ?? '');
    }, [searchParams]);

    return (
        <div className="bg-white">
            <div className="row vh-100 mx-0">
                <div className="col col-12 col-lg-6 mt-5 mt-lg-0 mb-4 mb-lg-0 d-flex justify-content-center">
                    <div className="container mt-5 mx-md-5">
                        {(verify && verify == 'false') ? <div className='alert alert-danger'>
                           Verification failed please try again!
                        </div>: <div className='alert alert-success'>
                            Verification successfull, please login!
                        </div>}
                    </div>
                </div>
                <div className="col col-12 col-lg-6 imgRight vh-100"></div>
            </div>
        </div>

    );
}

export default Verified;