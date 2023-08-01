// import './App.css'
// import Homepage from "./components/homepage/homepage"
// // import Login from "./components/login/login"
// // import Register from "./components/register/register"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { useState, useEffect } from 'react';

// function App() {

//   // const [ user, setLoginUser] = useState({
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   // })

//   // useEffect(() => {
//   //   const storedUser = localStorage.getItem("user");
//   //   if (storedUser) {
//   //     setLoginUser(JSON.parse(storedUser));
//   //   }
//   // }, []);

//   // const updateUser = (user) => {
//   //   localStorage.setItem("user", JSON.stringify(user))
//   //   setLoginUser(user)
//   // }

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           {/* <Route exact path="/" element= {
//               user && user._id ? <Homepage /> : <Login updateUser={updateUser}/>
//             } />
//           <Route path="/login" element={<Login updateUser={setLoginUser}/>} />
//           <Route path="/register" element={ <Register />} />  */}
//           <Route path='/' element= { <Homepage />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { WebRoutes } from "./routes";
import { history } from "./utils/history";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter history={history}>
        <WebRoutes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
