import React from 'react'
import s from '../form.scss'

function ErrComponent({text}) {
    return (
        <h1 className={s.form__err}>{text}</h1>
    )
}

export default ErrComponent
