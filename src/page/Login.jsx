import './Login.css';

import Loginpage from "../components/Loginpage"
import Sidebar from "../components/Sidebar";

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
