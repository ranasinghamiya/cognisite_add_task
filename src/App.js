import React from 'react';
import RegisterForm from './RegisterForm';
import LoginPage from './LoginPage';
import TaskManager from './TaskManager';
import './App.css';
import { BrowserRouter,Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskManager/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>
      </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;