import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.component';
import Team from './Components/Team.component';
import Form from './Components/Form.component';
import Cat from './Components/Cat.component';
import { useState } from 'react';

// מתג הסוויץ משנה לי קומפוננטה
function App() {
  const[meteg,setMeteg]=useState(true);
  return (
    <div className="App">
      <Counter/>
      <Team/>
     {/* <Form/> */}
     <br></br>
     <br></br>
     <button onClick={()=>setMeteg(!meteg)}>swich</button>
     {meteg?<Form/>:<Cat/>}
     {/* <Cat/> */}
     <br></br>
    </div>
  );
}

export default App;
