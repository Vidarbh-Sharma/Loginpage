
import React, { useEffect,useState } from "react";
import {useNavigate}from 'react-router-dom'


const Sign = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();

    
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
  
    })

    const collectData = async () => {
        console.warn(name, email, password);
       let result= await fetch('http://localhost:4700/register',{
        method:'POST',
        body:JSON.stringify({name,password,email}),
    headers:{
        'Content-Type':'application/json'
            
        },
        
       });
       result=await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        
    }         


    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <input className="inputBox" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputBox" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={collectData} className="appButton" type="button">Signup</button>
        </div>
    )
}

export default Sign;
