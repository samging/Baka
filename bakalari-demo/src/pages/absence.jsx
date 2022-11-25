import React from "react";
import Missed from "../pages/absence-routing/Missed";
import Daily from "../pages/absence-routing/Daily";
import Monthly from "../pages/absence-routing/Monthly";
import {  Route, Routes } from "react-router-dom";
import Absencenavv from "./absence-routing/absencenavv";


export const Absence = () => {


    return( 

      <div>
          
            <Absencenavv />

            <Routes>
            <Route exact path="/absence" component={Missed} key={1}/>
            <Route  path="/absence/daily" component={Daily} key={2}/>
            <Route  path="/absence/monthly" component={Monthly} key={3}/>
            

          </Routes>
          </div>
     
      

    
    )
}

export default Absence;