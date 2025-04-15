import { useState } from "react";
import './App.css'

function Contact(){
    const [contact,setContact]=useState("");
    useState({Name:" ",phoneNumber:" ",email:" "});
    const[name,setName]=useState(" ");
    const[number,setNumber]=useState(" ");
    const[email,setEmail]=useState(" ");

    const editName=()=>{
        setContact((prev)=>({...prev,Name:name}));
        setName("");
    }
    const editNumber=()=>{
        setContact((prev)=>({...prev,phoneNumber:number}));
        setNumber("");
    }
    const editEmail=()=>{
        setContact((prev)=>({...prev,email:email}));
        setEmail("");
    }

    return(
        <>
        <div>
<hr /><br />
<br />
<br />
<br />
        </div>
        <div style={{position:'absolute',left:'5rem',display:'flex',flexDirection:'column'}}>
        <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
        <button onClick={editName}>edit your name</button>
        <input type="text" value={number} onChange={(event)=>setNumber(event.target.value)}/>
        <button onClick={editNumber}>edit number</button>
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <button onClick={editEmail}>edit email</button>

        </div>
        <div>
<hr />
<br />
        </div>
        <div style={{position:'absolute',right:'20rem'}}>
        <br />
<br />
<br />
<br />
<br /><br /><br />
            <h1>Contact</h1>
            <h2>Name:{contact.Name}</h2>
            <h2>Phone:{contact.phoneNumber}</h2>
            <h2>Email:{contact.email}</h2>

        </div>
        </>
        
    )
}
export default Contact;