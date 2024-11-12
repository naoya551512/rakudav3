import './Make.css';
import { useState } from "react";
import MakepageUI from "./MakepageUI"
import Sidebar from "./Sidebar";

function Make() {
    const [taskList, setTaskList] = useState([]);
  
    return (
      
        <div className="App">
          <div className="main">
            <Sidebar /> 
            <div id="MakepageUI" className="content">
              <MakepageUI/>
            </div>
          </div>
        </div>
    
        
      );
  }
  
  export default Make;
