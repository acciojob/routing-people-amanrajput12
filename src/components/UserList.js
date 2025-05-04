import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
const UserList = () => {
    const [user,setUser] = useState([]);
    
  

    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users").then((data)=>data.json()).then((resp)=>setUser(resp))
    },[])

  
  return (
    <div>
        <h2>Userlist data</h2>
       <ul>{user.map((data)=><li key={data.id}>
            <Link to={`/users/${data.id}`}>{data.name}</Link>
            {/* {data.name} */}
            
       </li>)} </ul> 
    </div>
  )
}

export default UserList