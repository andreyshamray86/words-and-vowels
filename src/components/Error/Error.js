import React from 'react'

import './Error.css'

// component for error message if no response from server
const Error = ({error}) => {
    return (
        <div className='error__block'>
            <p className='error__title'>Something went wrong. Try another request</p>
        </div>
    )
}

export default Error
