import React, { useEffect, useState } from "react";
// import React,{useEffect} from "react";

function Cat() {
  // const[name,setName]=useState();
  // const[age,setAge]=useState();
  // const[color,setColor]=useState();
  // const[min,setMin]=useState(); 
   const [catObj, setCatObj] = useState({});

  useEffect(()=>{
    //   הגדרת פעולות
    if(catObj.name)alert('hi ${catObj.name}')
  }
//   תזמון הפעולות לפי שלבי מחזור החיים
  ,[catObj])

  const inputChange = (event) => {
    catObj[event.target.name] = event.target.value;
  };
  const ClickButton = () => {
    setCatObj({...catObj});
  };
  return (
    <div>
      name : <input name="name" type="text" onChange={inputChange} />
      age : <input name="age" type="text" onChange={inputChange} />
      color : <input name="color" type="text" onChange={inputChange} />
      min : <input name="min" type="text" onChange={inputChange} />
      <button onClick={ClickButton}>click</button>

      <h3>
          {catObj.name}
          {catObj.age}
          {catObj.color}
          {catObj.min}
      </h3>
    </div>
  );
}
export default Cat