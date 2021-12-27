import React,{useState} from "react";

function Counter(){
    const[count,setCount]=useState(0);
    const[firstName,setFirstName]=useState("");

    return(
        <div>
            <h1>{firstName}</h1>
            <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Up</button>
        <button onClick={()=>setCount(count-1)}>Minosh</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setFirstName("keren")}>myName</button>
        </div>
    )
}
export default Counter ;