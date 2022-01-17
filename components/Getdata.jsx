import axios from 'axios'
import React from 'react'
import {useEffect} from 'react'

const Getdata = () => {
 useEffect(()=> {
     async function getapi(){
         const res = await axios.get(`http://3.140.210.76:8000/api/user/`);
         console.log(res)
     }
     getapi();
 })


    return (
        <div>

<h1>Api data is in the console.</h1>
        </div>
    )
}

export default Getdata
