import './Home.css';

import "./Home.css";
import { Homepage } from "../components/Homepage";
import { Title } from "../components/Title";
import Sidebar from "../components/Sidebar";


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