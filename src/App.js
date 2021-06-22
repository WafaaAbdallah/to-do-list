import './App.css';
import List from './components/List';
import Input from './components/Input';
import { useEffect, useState } from 'react';

function App() {
  const [notdone,setNotDone] = useState([
   
  ]);
  const [done,setDone] = useState([
   
  ]);

  useEffect(()=>{
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
