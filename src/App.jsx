import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const App = () => {
  const [users,setusers] = useState(JSON.parse(localStorage.getItem("users")) || []);
  const [username, setname] = useState("");
  const [email, setemail]  = useState("");
  const [contact, setcontact] = useState("");
  
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
  const DeleteHandler = (id)=>{
      setusers(users.filter( (t)=>t.id!=id))
      localStorage.setItem("users", JSON.stringify(users.filter((t)=>t.id!=id)))
  }
  return (
    <div className='flex items-center justify-center mt-[177px] '>
      <form onSubmit={submitHandler} className='w-[35%]  justify-between px-5 my-[2%]' >
        <input  className='px-5 py-4 mb-4 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700'  onChange={(e)=>{setname(e.target.value)}}
          value = {username}
          type="text" placeholder='Username'/>
        <input  className='px-5 py-4 mb-4 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700'  onChange={(e)=>{setemail(e.target.value)}}
          value = {email}
          type="email" placeholder='email' />
        <input className='px-5 py-4 mb-4 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700'  onChange={(e)=>{setcontact(e.target.value)}}
          value = {contact}
          type="Number" placeholder='Contact' />
        <button className="outline-none rounded-xl text-2xl font-bold flex justify-center items-center bg-green-400 w-[6vmax] h-[3vmax]">Submit</button>
      </form>
      <ul className="list-none w-[35%]">
      { users.length > 0 ? users.map((user,index)=>{
          return(
            <li key={user.id}  className="mb-5 flex justify-between items-center border outline rounded-xl p-5">
              {user.username}  , {user.email} ,  {user.contact}
              <i onClick={()=>{ DeleteHandler(user.id)}} class="ri-delete-bin-line cursor-pointer"></i>
            </li>
          )
      }):(
        <h1 >Nothing to show</h1>
      )

      }
      </ul>
    </div>
    //
    
  )
}

export default App
