import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function ContactInput() {
    const [phone, setPhone] = useState('');
    return (
        <PhoneInput
            country={'us'}
            value={phone}
            onChange={phone => setPhone(phone)}
            containerClass={"t-input"}
            inputClass={'w-100'}
            buttonStyle={{borderRadius: 8, outline: 'none',     top: '6px',
            height: '45px',
            left: '6px',
            background: 'transparent',
            border: 'none'}}
            inputStyle={{height: 57, borderRadius: 8, overflow: 'hidden'}}
        />
    );
}

export default ContactInput;