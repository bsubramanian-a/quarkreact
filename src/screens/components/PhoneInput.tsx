import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function ContactInput({phone, setPhone}:any) {
    const [error, setError] = useState(false);
    
    const validate = () => {
        if(phone == ''){
            setError(true);
        }else{
            setError(false);
        }
    }

    return (
        <>
            <PhoneInput
                country={'us'}
                // value={phone}
                onChange={(phone:any) => setPhone(phone)}
                containerClass={"t-input"}
                inputClass={'w-100'}
                buttonStyle={{borderRadius: 8, outline: 'none',     top: '6px',
                height: '45px',
                left: '6px',
                background: 'transparent',
                border: 'none'}}
                inputStyle={{height: 57, borderRadius: 8, overflow: 'hidden'}}
                onBlur={validate}
            />
            {error && <div className="alert alert-danger small border-0 py-1 mb-0">This field is required!</div>}
        </>
    );
}

export default ContactInput;