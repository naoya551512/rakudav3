import './Login.css';

import Signuppage from "./Signuppage"
import Sidebar from "./Sidebar";

function Signup() {

  
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