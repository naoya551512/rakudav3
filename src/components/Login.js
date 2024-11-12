import './Login.css';
import { useState } from "react";
import Loginpage from "./Loginpage"
import Sidebar from "./Sidebar";

function Login() {
    const [taskList, setTaskList] = useState([]);
  
    return (
      
      <div className="App">
        <div className="main">
          <Sidebar /> {/* サイドバー */}
          <div className="content">
            <Loginpage/>
          </div>
        </div>
      </div>
  
      
    );
  }
  
  export default Login;
