import './Home.css';
import { useState } from "react";
import "./Home.css";
import { InputForm } from "./InputForm";
import { Title } from "./Title";
import { TodoList } from "./TodoList";
import Sidebar from "./Sidebar";


 function Home() {
  const [taskList, setTaskList] = useState([]);

  return (
    
    <div className="App">
      <div className="main">
        <Sidebar /> {/* サイドバー */}
        <div className="content">
          <Title />
          <InputForm taskList={taskList} setTaskList={setTaskList} />
          <TodoList taskList={taskList} setTaskList={setTaskList} />
          
        </div>
      </div>
    </div>

    
  );
}

export default Home;