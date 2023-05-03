// import React from 'react';
// import Editor from "./Component/Editor";
// import Button from "./Component/Button";
// import InputControl from "./Component/InputControl";
// import OutputControl from './Component/OutputControl';


// function App() {
//   return (
// 	<div className="App">
// 		<form method="post" className="form">
// 			<Editor />
// 			<Button />
// 			<InputControl />
// 			<OutputControl />
// 		</form>
// 	</div>   
//   );
// }

// export default App;


import './App.css'
import Homepage from "./Component/homepage/homepage"
import Login from "./Component/login/login"
import Register from "./Component/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

function updateUser(user) {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ 
              user && user._id ? <Homepage updateUser={updateUser} /> : <Login updateUser={updateUser}/>
            }/>
           
          <Route path="/login" element={<Login updateUser={updateUser}/>} />

          <Route path="/register" element={<Register/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
