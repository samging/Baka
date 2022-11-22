import React from 'react'
import Absence from './absence';

import {
  BrowserRouter as Router,
Routes,
Route,
  Link
} from 'react-router-dom';

export const Komens = () => {
  return (
    <Router>
      <Routes>
      <Route path="/app" element={<Absence />} />
    </Routes>
      <ul>
      <li>
<Link to="/app">backie</Link>

 </li>
 </ul>
  
    <div>komens</div>
    </Router>
  )
}

export default Komens;