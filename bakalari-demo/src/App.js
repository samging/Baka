import {ReactComponent as  Male } from './male.svg';
import './App.css';
import Based from './pages/based';
import data from './datas/basedata.json'
import {BrowserRouter} from "react-router-dom"
import React from 'react';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <div>
        <Male className='svgm' /> 
        <Based data={data}/>
      </div>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;


//data setting from something like invisible path 
//for props.data.map in basedpage.jsx to set in app.js