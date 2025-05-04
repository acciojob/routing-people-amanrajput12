
import React from "react";
import './../styles/App.css';
import UserList from "./UserList.js";
import {Routes,Route} from "react-router-dom"
import UserDetail from "./UserDetail.js";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <UserList/> */}
      
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/users/:id" element={<UserDetail/>}/>
        </Routes>
    </div>
  )
}

export default App
