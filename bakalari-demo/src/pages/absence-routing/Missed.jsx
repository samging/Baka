import React from 'react'
import { NavLink } from 'react-router-dom'
let activeClassName = {
  textDecoration: "underline",
  color: "green"
};
let deactiveClassName = {
  textDecoration: "underline",
  color: "red"
};

const navmiss = [
  { key: "1", to:"/absence", label:"Missed"},
  { key: "2", to:"/absence/daily", label:"Daily"},
  { key: "3", to:"/absence/monthly", label:"Monthly"},
  { key: "4", to:"/", label:"<<<"}

]
const Missed = () => {
  const linkmiss = navmiss.map(({key, to, label}) => {
    return <NavLink style={({ isActive }) =>  isActive ? activeClassName : deactiveClassName } strict exact to={to} key={key}>{label}</NavLink>}
    )
    return (
      <>
      <nav>{ linkmiss }</nav>
        <div>Missed</div>
        </>
    )
}

export default Missed