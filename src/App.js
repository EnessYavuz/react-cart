import React, { useState } from "react";
import { verilistesi } from './component/jsonn.js'
import "./App.css";

const App = () => {
  
  const [data, setData] = useState(verilistesi)
  
  const handleDelete=(id)=>{
    setData( data.filter(a=>a.id !== id))
  }

  return (
    <div className="App">
      <h1>verileri göster</h1>

      <ul>
        {data.map((veri)=>(

<>

<li key={veri.id}>{veri.title}</li>
<button onClick={()=>{
  handleDelete(veri.id)

  
}}>bunu sil</button>

</>

          

          
          ))}
      </ul>


    </div>
  );
};

export default App;
