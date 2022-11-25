import React from "react";
import Missed from "../pages/absence-routing/Missed";
import Daily from "../pages/absence-routing/Daily";
import Monthly from "../pages/absence-routing/Monthly";
import { Route, Routes, Link } from "react-router-dom";
import Absencenavv from "./absence-routing/absencenavv";


export const Absence = () => {


    return( 

      <div>
          
            <Absencenavv />

            <Routes>
            <Route path="absence/missed" element={<Missed/>}/>
            <Route path="absence/daily" element={<Daily/>}/>
            <Route path="absence/monthly" element={<Monthly/>}/>
          </Routes>
          <ul>
          <li>
          <Link to="absence/missed">222</Link>
          </li>
          </ul>
          </div>
     
      

    
    )
}

export default Absence;