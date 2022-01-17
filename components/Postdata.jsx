import React from 'react'
import './Getdata.css';
import { useState } from 'react';
import axios from 'axios';

function Postdata() {
const url = "http://3.140.210.76:8000/api/token/"
const [data, setData] = useState({
    email: "",
    password: ""
})

function submit(e){
     e.preventDefault();
     axios.post(url, {
         email: data.email,
         password: data.password,
     })
     .then(res=>{
         console.log(res.data)
     })

}

function handle(e) {
    const newdata ={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
}


    return (
        <div id='post'>
            <form onSubmit={(e)=> submit(e)}>
            <h1>Email</h1>
            <input onChange={(e)=>handle(e)} value={data.email} type="email" name="email" id="email" />
            <h1>Password</h1>
            <input  onChange={(e)=>handle(e)} value={data.password} type="password" name="password" id="password" />
            <button>submit</button>
            </form>
        </div>
       
    )
}

export default Postdata;
