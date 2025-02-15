import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Make from './page/Make';
import Edit from './page/Edit';


function App () {
  return (
        <div className="App">
            <BrowserRouter>
                <Routes basename="/">
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/make" element={<Make />} />
                    
                </Routes>
            </BrowserRouter>
      </div>
            
  );
}

export default App;
