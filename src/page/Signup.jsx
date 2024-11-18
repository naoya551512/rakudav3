import styles from './Login.module.css';

import Signuppage from "../components/Signuppage"
import Side from "../components/Side";

function Signup() {

  
    return (
      
      <div className={styles.App}>
        <div className="main">
          <Side /> {/* サイドバー */}
          <div className="content">
            <Signuppage/>
          </div>
        </div>
      </div>
  
      
    );
  }
  
  export default Signup;