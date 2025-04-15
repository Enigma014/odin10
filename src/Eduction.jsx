import { useState } from "react";
import './App.css'

function Education(){
    const [education,setEducation]=useState("");
    useState({uniName:" ",Address:" ",Degree:" ",Cgpa:" "});
    const[name,setName]=useState(" ");
    const[address,setAddress]=useState(" ");
    const[degree,setDegree]=useState(" ");
    const[cgpa,setCgpa]=useState(" ");
    const editName=()=>{
        setEducation((prev)=>({...prev,uniName:name}));
        setName("");
    }
    const editAddress=()=>{
        setEducation((prev)=>({...prev,Address:address}));
        setAddress("");
    }
    const editDegree=()=>{
        setEducation((prev)=>({...prev,Degree:degree}));
        setDegree("");
    }
    const editCgpa=()=>{
        setEducation((prev)=>({...prev,Cgpa:cgpa}));
        setCgpa("");
    }
    return(
        <>
        <div style={{position:'absolute',top:'50px',left:'5rem',display:'flex',flexDirection:'column'}}>
            <h1>Resume</h1>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
        <button onClick={editName}>edit name</button>
        <input type="text" value={address} onChange={(event)=>setAddress(event.target.value)}/>
        <button onClick={editAddress}>edit address</button>
        <input type="text" value={degree} onChange={(event)=>setDegree(event.target.value)}/>
        <button onClick={editDegree}>edit degree</button>
        <input type="text" value={cgpa} onChange={(event)=>setCgpa(event.target.value)}/>
        <button onClick={editCgpa}>edit cgpa</button>
        </div>
        
        <div style={{position:'absolute',top:'50px',right:'20rem'}}>
            <h1>Resume</h1>
            <h1>Education</h1>
            <h2>University:{education.uniName}</h2>
            <h2>Address:{education.Address}</h2>
            <h2>Degree:{education.Degree}</h2>
            <h2>Cgpa:{education.Cgpa}</h2>
        </div>
        </>
        
    )
}
export default Education;