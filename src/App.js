import Login from "../src/components/Login/Login"
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Signup from "./components/SignUp/Signup"


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("127.0.0.1:4040/me")
    .then((r) => {
      if(r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/Login' element={<Login user={setUser} setUser={setUser} />}/>
        </Routes>
    </div>
  );
}

export default App;
