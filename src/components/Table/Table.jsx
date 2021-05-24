import React from 'react';
import s from './table.scss'
import TableContent from './TableContent/TableContent.jsx';
import TableHead from './TableHead/TableHead.jsx';


 const Table = () => {


    return (
        <table className={s.table}>
            <tbody>
               <TableHead/>
               <TableContent/>
            </tbody>
        </table>
    )
}

export default Table