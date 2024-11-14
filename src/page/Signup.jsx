import './Login.css';

import Signuppage from "../components/Signuppage"
import Sidebar from "../components/Sidebar";

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