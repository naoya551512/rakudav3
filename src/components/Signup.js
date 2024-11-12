import './Login.css';
import { useState } from "react";
import Signuppage from "./Signuppage"
import Sidebar from "./Sidebar";

function Signup() {
    const [taskList, setTaskList] = useState([]);
  
    return (
      
      <div className="App">
        <div className="main">
          <Sidebar /> {/* サイドバー */}
          <div className="content">
            <Signuppage/>
          </div>
        </div>
      </div>
  
      
    );
  }
  
  export default Signup;