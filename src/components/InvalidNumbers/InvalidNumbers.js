import React from 'react'

import './InvalidNumbers.css'

const InvalidNumbers = ({invalid}) => {
    return (
        <div className='invalid__numbers'>
            
            <p className='invalid__numbers-title'>Введены неверные числа: </p>
            {
                invalid.map(num => {
                    if(num > 20) {
                        return <p className='error' key={num}><span className='error__num'>{num}</span> больше 20</p>
                    } else if(num < 1 && num && num !== ' ') {
                        return <p className='error' key={num}><span className='error__num'>{num}</span> меньше 1</p>
                    }
                    return ''
                })
            }
        </div>
    )
}

export default InvalidNumbers
