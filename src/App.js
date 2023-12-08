import { useState } from 'react';
import './App.css';

function App() {

 const[data, setData] = useState([]);

 try{
    fetch(process.env.REACT_APP_API_URL)
    .then(res => res.json())
    .then(data => setData(data))
 }
  catch(err){
    console.log(err);
  }

  console.log(data);

  return (
    <div>
      <h1>Kanban Board clone using ReactJS and CSS</h1>
    </div>
  );
}

export default App;
