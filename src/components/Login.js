import './Login.css';

import Loginpage from "./Loginpage"
import Sidebar from "./Sidebar";

function Login() {

  
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
