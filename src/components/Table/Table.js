import React from 'react'

import TableRow from '../TableRow/TableRow'

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
                <TableRow/>
            </tbody>
        </table>
    )
}

export default Table
