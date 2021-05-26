import { nanoid } from 'nanoid'
import React, { useEffect, useMemo, useState, } from 'react'
import TableActions from './TableActions.js/TableActions.jsx'
import {clearTable, saveStudentAC,studentsFetchData} from '../../../redux/actions'
import s from '../table.scss'
import { connect } from 'react-redux';
import InputName from '../inputs/InputName.jsx'
import InputFaculty from '../inputs/InputFaculty.jsx'
import InputBerthday from '../inputs/InputBirtday.jsx'
import InputAddmission from '../inputs/InputAddmission.jsx'



let clearLS = localStorage.getItem('clear') ? JSON.parse(localStorage.getItem('clear')) : true;
localStorage.setItem('clear', JSON.stringify(clearLS));
 let data = JSON.parse(localStorage.getItem('clear'));

function TableContent({studentsState,fetchData,saveStudentAC,clearTable}) {

useEffect(() => {
    if(data){
        clearTable()
        localStorage.setItem('clear', JSON.stringify(data = false))
    } else {
        fetchData() 
    }
    console.log(1)
},[data])


if(studentsState.length){
    return studentsState.map(({_id,data}) => {

        const newData = {
            id: data.id,
            name: data.name,
            faculty: data.faculty,
            birthday:data.birthday,
            addmission: data.addmission,
            editable: false
    };
    
        // const y = [newData]
        const updateData = (value) => {

            for (let key in value){
                for(let key2 in newData){
        
                 
                    if(key === key2){
                        newData[key2] = value[key]
                        
                    //    y.splice(0,1,newData)

                    }
        
                }
            }
        }

        
const handleOnSave = (ev) => {

    saveStudentAC(newData,_id)

    }

        
        return (
            <tr className={s.table__row} key={_id}>
                <th className={s.table__cell}>
                {_id}
                </th>
            {
                data.editable ?
      
                <InputName dataValue = {data.name} handleOnSave = {updateData} />
            
                :

                <th className={s.table__cell}>
                {data.name}
                </th>
            }



                {data.editable ?
                <InputFaculty dataValue = {data.faculty} handleOnSave = {updateData}/>
                // <th className={s.table__cell}>
                // <input type='text'  name = 'faculty' className={s.table__input_change}/>
                // </th> 
                :
                <th className={s.table__cell}>
                {data.faculty}
                </th>    
                }

                

                {
                    data.editable ?
                   <InputBerthday dataValue = {data.birthday} handleOnSave = {updateData} />
                :
                    <th className={s.table__cell}>
                    {data.birthday}
                    </th>
                }
              
                
                
                {data.editable?
               <InputAddmission dataValue = {data.addmission} handleOnSave = {updateData} />
                :
                <th className={s.table__cell}>
                    {data.addmission}
                </th>
                }
               
                <th className={s.table__cell}>
                    <TableActions id = {_id} data={data} onSave = {handleOnSave} />
                </th>
              </tr> 
        )
    })
}

return (
        <tr className={s.table__row_empty}>
            <th className={s.table__cell_empty}>
                Пока пусто
            </th>
        </tr>
    )
    
}

const mapStateToProps = state => {
    return {
        studentsState: state.students
    }
};

const mapDispatchToProps = dispatch => {
return {
    fetchData: url => {dispatch(studentsFetchData(url))},
    saveStudentAC: (newValue,id) => (dispatch(saveStudentAC(newValue,id))),
    clearTable: () => (dispatch(clearTable()))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(TableContent)
