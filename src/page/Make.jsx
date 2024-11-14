import './Make.css';

import MakepageUI from "../components/MakepageUI"
import Sidebar from "../components/Sidebar";

function Make() {

  
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
