import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {

  return (

    <>  
    <ul className ="w-full bg-transparent text-white flex justify-between p-6 rounded-b-lg absolute top-0 left-0 right-0">
        <li>
            <Link to = "/"><h1 className ="text-2xl">Vibechat</h1></Link>
            

        </li>
        <li className = "flex gap-4">
                <Link to ="/Main/users"> Users</Link>
                <Link to = "/bozo">Logout</Link>
                </li>


        
        </ul>      

    
    </>
  )
}

export default Navbar