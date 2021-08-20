import React, {createContext, useState} from 'react';

export const StringsContext = createContext();

export const StringsContextProvider = ({children}) => {
    const [id, setId] = useState('');
    const [strings, setStrings] = useState([]);

    const idArray = id.split(',');
 
    const filteredId = idArray.filter((id, index, arr) => {
        return arr.indexOf(id) === index;
    }).filter(num => {
        return num > 1 && num < 21;
    });
    

    const getStrings = () => {
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
            .catch(err => console.log(err))
        });
        setId('');
    }

    return (
        <StringsContext.Provider value={[id, setId, getStrings, strings]}>
            {children}
        </StringsContext.Provider>
    )

}