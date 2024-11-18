import './Make.css';

import Makepage from "../components/Makepage"
import Side from "../components/Side";

function Make() {

  
    return (
      
        <div className="App">
          <div className="main">
            <Side /> 
            <div id="Makepage" className="content">
              <Makepage/>
            </div>
          </div>
        </div>
    
        
      );
  }
  
  export default Make;
