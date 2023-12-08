import { useState } from 'react';
import './App.css';

function App() {

 const[data, setData] = useState([]);

 fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
  .then((response) => response.json())  
  .then((data) => setData(data));
  console.log(data);

  return (
    <div>
      <h1>Kanban Board clone using ReactJS and CSS</h1>
    </div>
  );
}

export default App;
