import React, { useState } from 'react';
import FormAdd from'../components/FormAdd/FormAdd.jsx';
import Table from '../components/Table/Table.jsx'
import s from './app.scss'

const App = (props) => {
  return (
    <div className={s.app}>
      <FormAdd/>
      <Table/>
    </div>
  );
}

export default App