import React from 'react'
import { connect } from 'react-redux'
import {deleteStudentAC, editStudentAC} from '../../../../redux/actions'
import s from '../../table.scss'

function TableActions({id,data,deleteStudentAC,editStudentAC,onSave}) {

const onDelete = ev => deleteStudentAC(id)

const onEdit = ev => {
    
    editStudentAC(data,id)
}


    return (
        <React.Fragment>
            {data.editable ?
            <button className = {`${s.table__btn} ${s.table__btn_edit}`} onClick={onSave}>
            Coxранить
            </button>
            :
            <button className = {`${s.table__btn} ${s.table__btn_edit}`} onClick={onEdit}>
            Изменить
            </button>
            }
            
            <button className = {`${s.table__btn} ${s.table__btn_remove}`} onClick={onDelete}>
                Удалить
            </button>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        
        deleteStudentAC: (url,id) => (dispatch(deleteStudentAC(url,id))),
        editStudentAC: (student,id) => (dispatch(editStudentAC(student,id))),
        saveStudentAC: (student,id) => (dispatch(saveStudentAC(student,id)))
    }
}

export default connect(null,mapDispatchToProps)(TableActions)
