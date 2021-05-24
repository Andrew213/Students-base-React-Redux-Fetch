import React, { useState } from 'react'
import s from '../table.scss'


function InputBerthday({dataValue,handleOnSave}) {
   
    const [state, setState] = useState({birthday : dataValue});

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
        <input value={state.birthday} onChange={handleChange} type='text' onFocus={handleFocus} onBlur = {handleBlur} name = 'birthday' className={s.table__input_change}/>
        </th> 
    )
}

export default InputBerthday





