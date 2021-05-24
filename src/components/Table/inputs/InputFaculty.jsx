import React, { useState } from 'react'
import s from '../table.scss'


function InputFaculty({dataValue,  handleOnSave}) {
   
    const [state, setState] = useState({faculty : dataValue});

    const handleChange = ev => {

        setState(prevState => {
            return {
                ...prevState,
                [ev.target.name] : ev.target.value
            }
        })
    }


    const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    handleOnSave(state)
      
  });

    return (
        <th className={s.table__cell}>
        <input type='text' name='faculty' value = {state.faculty} onChange={handleChange} className={s.table__input_change}/>
        </th> 
    )
}

export default InputFaculty





