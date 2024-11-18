import './Login.module.css';
import Side from "../components/Side";
import Loginpage from "../components/Loginpage"


function Login() {

  
  return (
      
    <div className="App">
      <div className="main">
        <Side /> 
        <div id="Makepage" className="content">
          <Loginpage/>
        </div>
      </div>
    </div>

    
  );
}
  
export default Login;
