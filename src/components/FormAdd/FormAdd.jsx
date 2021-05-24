import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Table } from '../Table/Table.jsx';
import {addStudentAC,showErr} from '../../redux/actions'
import s from './form.scss';
import ErrComponent from './ErrComponent/ErrComponent.jsx';


const validateForms = (...formValue) => {
    
    let x = formValue.filter(val => val.trim())

   return x.length === formValue.length ? true : false
} 

 const FormAdd = ({ err, showErr,addStudentAC}) => {

    const [{name,faculty,birthday,addmission}, setInputText] = useState({
        name: '',
        faculty: '',
        birthday: '',
        addmission: ''
    });    
    const handleFocus = ev => ev.target.type = 'date';
    
    const handleBlur = ev => ev.target.type = 'text';

    const handleKeyPress = ev => {
        if(!ev.key.match(/^[а-яёА-ЯЁ_ ]*$/)){
            ev.preventDefault()
        }
    }
    
    const handleOnChange = ev => {
            setInputText({
                ...{name,faculty,birthday,addmission},
                ...{[ev.target.name]: ev.target.value} 
                })
        }

        const handleSubmit = ev => {
            ev.preventDefault()
                if(validateForms(name,faculty,birthday,addmission)){

                  addStudentAC ({
                        id: nanoid(),
                        name: name,
                        faculty: faculty,
                        birthday: birthday,
                        addmission: addmission,
                        editable: false
                    })
                    setInputText({
                        name: '',
                        faculty: '',
                        birthday: '',
                        addmission: ''
                        })
                    
                } else {
                    showErr('Не все поля заполненны')
                }
        }

    return (
        <React.Fragment>
        <form className={s.form} onSubmit = {handleSubmit}>
            <div className={s.form__inner}>
            <input value = {name} onChange={handleOnChange} onKeyPress = {handleKeyPress} name='name' className={s.form__input} type="text" placeholder='ФИО'/>
            <input value = {faculty} onChange={handleOnChange} onKeyPress = {handleKeyPress} name='faculty' className={s.form__input} type="text" placeholder='Факультет'/>
            <input value = {birthday} onChange={handleOnChange} name = 'birthday' className={s.form__input} onFocus={handleFocus} onBlur={handleBlur}  placeholder='Дата рождения'/>
            <input value= {addmission} onChange={handleOnChange} name = 'addmission' className={s.form__input} onFocus={handleFocus} onBlur={handleBlur} placeholder='Дата поступления'/>
            <button className={s.form__btn}>Добавить студента</button>
            </div>
        </form>
        {err.active && <ErrComponent text={err.text} />}
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return ({
        err: state.err,
    })
}

const mapDispatchToProps ={
addStudentAC,
showErr
}

export default connect(mapStateToProps,mapDispatchToProps)(FormAdd)

