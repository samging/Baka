import React from "react";
import '../App.css';
import Dokumenty from "./dokumenty";
import Event from "./event";
import Homework from "./homework";
import Infochannel from "./infochannel";
import Marks from "./marks";
import Semester from "./semester";
import Subjects from "./subjects";
import Substitution from "./substitution";
import Teaching from "./teaching";
import Timetable from "./timetable";
import Vyuka from "./vyuka";
import Komen from "./Komen";
import Newkomen from "./newkomen";
import Notfound from "./Notfound";
import Draft from "./komens-routing/Draft";
import Noticeboard from "./komens-routing/Noticeboard";
import Recieved from "./komens-routing/Recieved";
import Sent from "./komens-routing/Sent";
import Missed from "./absence-routing/Missed";
import Daily from "./absence-routing/Daily";
import Monthly from "./absence-routing/Monthly";

//import Absencenavv from "./absence-routing/absencenavv";

//  BrowserRouter as Router,

import {
	Routes,
	Route,
    Link
} from 'react-router-dom';


const Based = (props) => {
    return(
        <div>
                {
         
         props.data.map (content =>(
            <div>
                <span><strong> {content.lastn} {content.firstn}, {content.classn} </strong></span>
                    <div>
                    <Routes>
                    <Route path="/" />
                    <Route path="*" element={<Notfound/>}/>

                    
                    <Route path="komens">
                        <Route index element={<Komen/>}/>
                        <Route path="recieved" element={<Recieved/>}/>
                        <Route path="sent" element={<Sent/>}/>
                        <Route path="noticeboard" element={<Noticeboard/>}/>
                        <Route path="draft" element={<Draft/>}/>
                        <Route path="new" element={<Newkomen/>}/>
                    </Route>

                    
                    
                   
                 
                   
                   

                    <Route path="dokumenty" element={< Dokumenty />} />
                    <Route path="event" element={< Event />} />
                    <Route path="homework" element={< Homework />} />
                    <Route path="infochannel" element={< Infochannel />} />
                    <Route path="marks" element={< Marks />} />
                    <Route path="semester" element={< Semester />} />
                    <Route path="subjects" element={< Subjects />} />
                    <Route path="substitution" element={< Substitution />} />
                    <Route path="teaching" element={< Teaching />} />
                    <Route path="timetable" element={< Timetable />} />
                    <Route path="vyuka" element={< Vyuka />} />
                    </Routes>
                    
                    <nav>
                    
                    <ul>
                    
                    <li>
                        
                    </li>

                    <li>
                    <Link to="/">home</Link>
                    </li>
                    <li>
                    <Link to="komens">{content.button1}</Link>

                    </li>
                 
                    <li>
                    <Link to="event">{content.button3}</Link>

                    </li>
                    <li>
                    <Link to="marks">{content.button4}</Link>


                    </li>
                    <li>
                    <Link to="semester">{content.button5}</Link>

                    </li>
                    <li>
                    <Link to="timetable">{content.button6}</Link>

                    </li>
                    <li>

                    <Link to="substitution">{content.button7}</Link>

                    </li>
                    <li>
                    <Link to="subjects">{content.button8}</Link>


                    </li>
                    <li>
                    <Link to="teaching">{content.button9}</Link>

                    </li>
                    <li>

                    <Link to="homework">{content.button10}</Link>

                    </li>
                    <li><Link to="infochannel">{content.button11}</Link></li>
                    <li><Link to="dokumenty">{content.button12}</Link></li>
                    <li><Link to="vyuka">{content.button13}</Link></li>
                    </ul>
                  
                            
                       
                    </nav>

                    
                </div>

            </div>
            ))
        }

        </div>
    );

}

export default Based;




//Route path="/komens" element={< Komens />} />
//<Route path="/komens/:id" element={< Komen />} />
//<Route path="/komens/new" element={< Newkomen />} />
