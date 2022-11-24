import React from "react";
import Missed from "../pages/absence-routing/Missed";
import Daily from "../pages/absence-routing/Daily";
import Monthly from "../pages/absence-routing/Monthly";
import { Link, Route, Routes } from "react-router-dom";
import Absencenavv from "./absence-routing/absencenavv";


export const Absence = () => {


    return( 

      <div>
          
            <Absencenavv />

            <Link to="/absence/missed">Daily</Link>




            <Routes>
            <Route exact path="/absence" component={<Absence/>} key={1}/>
            <Route path="/absence/missed" component={<Missed/>} key={4}/>   {/* need to change component to route  */} 
            <Route  path="/absence/daily" component={Daily} key={2}/>
            <Route  path="/absence/monthly" component={<Monthly/>} key={3}/>

          </Routes>
          </div>
     
      

    
    )
}

export default Absence;