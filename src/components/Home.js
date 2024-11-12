import './Home.css';

import "./Home.css";
import { Homepage } from "./Homepage";
import { Title } from "./Title";
import Sidebar from "./Sidebar";


 function Home() {
  

  return (
    
    <div className="App">
      <div className="main">
        <Sidebar /> {/* サイドバー */}
        <div className="content">
          <Title />
          <Homepage />
          
        </div>
      </div>
    </div>

    
  );
}

export default Home;