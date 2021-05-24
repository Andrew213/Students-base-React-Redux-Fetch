import React, { useState } from 'react'
import s from '../table.scss'


function InputAddmission({dataValue,handleOnSave}) {
   
    const [state, setState] = useState({addmission : dataValue});

    const handleFocus = ev => ev.target.type = 'date';
    
    const handleBlur = ev => ev.target.type = 'text';

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
        <input value={state.addmission} onChange={handleChange} type='text' onFocus={handleFocus} onBlur = {handleBlur} name = 'addmission' className={s.table__input_change}/>
        </th> 
    )
}

export default InputAddmission





