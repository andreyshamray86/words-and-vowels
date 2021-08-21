import React, {createContext, useState} from 'react';

export const StringsContext = createContext();

export const StringsContextProvider = ({children}) => {
    const [id, setId] = useState('');
    const [strings, setStrings] = useState([]);
    const [error, setError] = useState('');

    const idArray = id.split(',');
 
    // removing duplicates and wrong values from the array of inputs
    const filteredId = idArray.filter((id, index, arr) => {
        return arr.indexOf(id) === index;
    }).filter(num => {
        return num > 0 && num < 21;
    });

    // removing data from the table if input is empty
    if(!id && strings.length > 0) {
        setStrings([]);
    }
    
    // getting strings from the server and creating an array from them
    const getStrings = () => {
        setStrings([]); // removing all data from strings to avoid duplicates in the table

        filteredId.forEach(number => {
            let id = +number;
            const config = {
                headers: {
                    'TMG-API-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ=='
                }
            }
            fetch(`https://tmgwebtest.azurewebsites.net/api/textstrings/${id}`, config)
            .then(res => res.json())
            .then(data => {
                setStrings(oldStrings => [...oldStrings, data]);
            })
            .catch(err => setError(err))
        });
    }

    return (
        <StringsContext.Provider value={[id, setId, getStrings, strings, setStrings, error, setError]}>        
            {children}
        </StringsContext.Provider>
    )
}