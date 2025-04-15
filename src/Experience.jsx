import { useState } from "react";
import './App.css'

function Experience(){
    const [experience,setExperience]=useState("");
    useState({Name:" ",Position:" ",Details:" "});
    const[name,setName]=useState(" ");
    const[position,setPosition]=useState(" ");
    const[details,setDetails]=useState(" ");

    const editName=()=>{
        setExperience((prev)=>({...prev,Name:name}));
        setName("");
    }
    const editPosition=()=>{
        setExperience((prev)=>({...prev,Position:position}));
        setPosition("");
    }
    const editDetails=()=>{
        setExperience((prev)=>({...prev,Details:details}));
        setDetails("");
    }

    return(
        <>
        <div>

        </div>

        <div style={{position:'absolute',left:'5rem',display:'flex',flexDirection:'column'}}>
        <br />
<br />
<br />
<br />
<br /><br /><br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br /><br /><br />
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
        <button onClick={editName}>edit company name</button>
        <input type="text" value={position} onChange={(event)=>setPosition(event.target.value)}/>
        <button onClick={editPosition}>edit position</button>
        <input type="text" value={details} onChange={(event)=>setDetails(event.target.value)}/>
        <button onClick={editDetails}>edit details</button>

        </div>
        <div>
        <br />
<br />
<br />
<br />
<hr />
<br />
        </div>
        <br /><br /><br /><br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
        <div style={{position:'absolute',right:'20rem'}}>

            <h1>Experience</h1>
            <h2>Name:{experience.Name}</h2>
            <h2>Position:{experience.position}</h2>
            <h2>Details:{experience.details}</h2>

        </div>
        </>
        
    )
}
export default Experience;