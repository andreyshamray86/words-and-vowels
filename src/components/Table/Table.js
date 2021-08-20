import React from 'react'

import './Table.css'

const Table = () => {
    return (
        <table className='table' cellSpacing="10" cellPadding="20">
            <thead>
                <tr>
                    <th>Текст</th>
                    <th>Количество слов</th>
                    <th>Количество гласных</th>
                </tr>
            </thead>
            <tbody>
                <tr align="center">
                    <td className='table__text'>fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</td>
                    <td className='table__words'>10</td>
                    <td className='table__vowels'>22</td>
                </tr>
            </tbody>
</table>
    )
}

export default Table
