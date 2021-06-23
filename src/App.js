import './App.css';
import List from './components/List';
import Input from './components/Input';
import { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [notdone,setNotDone] = useState([
   
  ]);
  const [done,setDone] = useState([
   
  ]);

  useEffect(async ()=>{
    dispatch(se)
    try {
      const res = await axios.get("http://localhost:8080/lists");
    
      setNotDone(res.data)
     
    } catch (error) {
      console.log(error);
    }
    // Call api to get not done todos
    // Call api to get  done todos
  })
  return (
    <div >
      <Input />
      <div style={{flexDirection:"row", width:"100%"}}> 
      <div>
      <List data={notdone} />
      </div>
        <div>

      <List data={done}/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
