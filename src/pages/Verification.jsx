import React from 'react'
import OtpInput from '../Components/OtpForm'


const Verification = () => {
    return (
        <div className='auth-bg'>
            <div className='verification-modal'>
                <h1>Please verify your account</h1>
                <p>A code has been sent to your registered mail.</p>
                <p>Please enter code below.</p>
                <div>
                    <OtpInput />
                </div>
            </div>
        </div>
    )
}

export default Verification
