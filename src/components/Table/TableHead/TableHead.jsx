import React from 'react'
import s from '../table.scss'

function TableHead() {
    return (
        <tr className={s.table__head}>
        <th name={'head-id'} className={s.table__head_cell}>
            <p>ID</p>
        </th>
        <th name={'head-fullName'} className={s.table__head_cell}>
            <p>ФИО</p>
        </th>
        <th name={'head-faculty'} className={s.table__head_cell}>
            <p>Факультет</p>
        </th>
        <th name={'head-birthday'} className={s.table__head_cell}>
            <p>Дата рождения</p>
        </th>
        <th name={'head-addmission'} className={s.table__head_cell}>
            <p>Дата поступления</p>
        </th>
        <th name={'head-actions'} className={s.table__head_cell}>
            <p>
                Действия
            </p>
        </th>
    </tr>
    )
}

export default TableHead
