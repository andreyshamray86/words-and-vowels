import React, {useContext} from 'react'
import { StringsContext } from '../../context/StringsContext'

import './TableRow.css'

const TableRow = () => {
    const [,,,strings] = useContext(StringsContext);

    return (
        <>
            {
                strings.map(string => {
                    // count words in the text
                    const numberOfWords = string.text.split(/[\s,;]+/).length;

                    // count vowels in the text
                    const numberOfVowels = string.text.match(/[aeiouyаеёиоуыэюя]/gi).length;

                    return (
                        <tr className='row' key={Math.random() * 100}>
                            <td className='table__text row-padding'>{string.text}</td>
                            <td className='table__words row-padding'>{numberOfWords}</td>
                            <td className='table__vowels row-padding'>{numberOfVowels}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default TableRow
