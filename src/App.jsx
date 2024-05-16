import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const App = () => {
  const [users,setusers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [username, setname]   =useState("");
  const [email, setemail]   =useState("");
  const [contact, setcontact]   =useState("");
  
  const submitHandler = (e)=>{
    e.preventDefault();
    const newuser = {id:nanoid(), username, email,contact};
    console.log(newuser)
    setusers([...users,newuser]);
    setname("");
    setemail("")
    setcontact("")

    localStorage.setItem("users",JSON.stringify([...users,newuser]))
        
    
    console.log("submit")
  }
  return (
    <div>
      <form onSubmit={submitHandler} className='w-[35%] flex justify-between px-5 my-[2%]' >
        <input  onChange={(e)=>{setname(e.target.value)}}
          value = {username}
          type="text" placeholder='Username'/>
        <input  onChange={(e)=>{setemail(e.target.value)}}
          value = {email}
          type="email" placeholder='email' />
        <input  onChange={(e)=>{setcontact(e.target.value)}}
          value = {contact}
          type="Number" placeholder='Contact' />
        <button>Submit</button>
      </form>
      <ul className="list-none w-[35%]">
      { users.length > 0 ? users.map((user,index)=>{
          return(
            <li key={user.id}>
              
            </li>
          )
      }):(
        <h1>Nothing to show</h1>
      )

      }
      </ul>
    </div>
    //
    
  )
}

export default App
