import React, {useContext} from 'react'
import { StringsContext} from '../../context/StringsContext'

import InvalidNumbers from '../InvalidNumbers/InvalidNumbers'
import Error from '../Error/Error'
import './Form.css'

const Form = () => {
    const [id, setId, getStrings,,, error, setError] = useContext(StringsContext)
    let invalid = [];
    
    const inputHandler = (e) => {
        setId(e.target.value); 
        
        // removing error message before another request
        setError('');
    }

    const clickHandler = () => {
        // getting strings from server
        getStrings();
    }
    
    // adding numbers in invalid array, validation for commas and whitespaces
    if(id) {
        invalid = id.split(',').filter(id => {
            return (id < 1 || id > 20) && id !== '' && id !==' ';
        });
    }
    
    return (
        <div className='form'>
            {error && <Error/>}
            {invalid.length > 0 && <InvalidNumbers invalid={invalid}/>}
            <input 
            type="text" 
            className='form__input' 
            value={id} 
            onChange={inputHandler}
            />
            <button className='form__btn' onClick={clickHandler}>Подсчитать</button>
        </div>
    )
}

export default Form
