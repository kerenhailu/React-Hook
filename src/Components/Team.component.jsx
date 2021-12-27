import React, { useState } from "react";

function Team() {
  let [numWorker, setNumWorker] = useState(0);
  let [dayWork, setDayWork] = useState(0);
  let [hourWork, setHourWork] = useState(0);
  let [moneyDay, setMoneyDay] = useState();
  let[moreWorker,setMoreWorker]=useState();
  let[className,setClassName]=useState();
  function getOneMore(num){
return num+1;
  }
  function dwonOne(num){
return num-1
  }
  function resetNum(){
return 0;
  }
  function MoneyPerDay(num1,num2){
      return num1*num2;
  }
 
const changeCount=(eve)=>{className=eve.target.value}
  return (
    <div>
      <p>num of worker : {numWorker}</p>
      <button onClick={() => setNumWorker(getOneMore(numWorker))}>Up worker</button>
      <button onClick={() => setNumWorker(dwonOne(numWorker))}>dwon worker</button>
      <button onClick={() => setNumWorker(resetNum())}>reset worker</button>
      <br></br>
      <p>num of days : {dayWork}</p>
      <button onClick={() => setDayWork(getOneMore(dayWork))}>Up days work</button>
      <button onClick={() => setDayWork(dwonOne(dayWork))}>Dwon days work</button>
      <button onClick={() => setDayWork(resetNum())}>reset</button>
      <br></br>
      <p>num of hour : {hourWork}</p>
      <button onClick={() => setHourWork(hourWork + 1)}>Up hour work</button>
      <button onClick={() => setHourWork(hourWork - 1)}>Up days work</button>
      <button onClick={() => setHourWork(0)}>reset</button>
      <br></br>
      <p>Money per day : {moneyDay}</p>
      <button onClick={() => setMoneyDay(0)}>click to reset</button>
      <button onClick={() => setMoneyDay(MoneyPerDay(hourWork,dayWork))}>cefel</button>
      <br></br>
      <input type="number" id="input" />
      <h1>name of the class : {className}</h1>
      <input type="text" onChange={changeCount}/>

      <button onClick={()=>setClassName(className)}>click to see your name</button>
    </div>
  );
}

export default Team;
