import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
const UserDetail = () => {
    const {id} = useParams();
    const [detail,setDetail] = useState("")

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(data=>data.json()).then(resp=>setDetail(resp))
    })
  return (
    <div>
      { !detail ? <div>Loading...</div>:<div>
        <h1>User Details</h1>
        <p><strong>Name: </strong>{detail.name}</p>
        <p><strong>Username: </strong>{detail.username}</p>
        <p><strong>Email: </strong>{detail.email}</p>
        <p><strong>Phone: </strong>{detail.phone}</p>
        <p><strong>Website: </strong>{detail.website}</p>
    </div>
}
</div>
  )
}

export default UserDetail