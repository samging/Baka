import React from "react";
import { NavLink } from 'react-router-dom';

const routes =[
{ key: "1", to:"/absence", label:"Missed"},
{ key: "2", to:"/absence/daily", label:"Daily"},
{ key: "3", to:"/absence/monthly", label:"Monthly"},
{ key: "4", to:"/", label:"<<<"}

];

const Absencenavv = () => {
  
  
  const links = routes.map(({key, to, label}) => {
    return <NavLink strict exact to={to} key={key}>{label}</NavLink>}
    )
    return <nav>{ links }</nav>;
  
     
 
  
}

export default Absencenavv;