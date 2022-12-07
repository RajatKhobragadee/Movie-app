import React from "react";  //improt for using jsx
import {Routes,Route} from 'react-router-dom' 
import SingleMovie from "./SingleMovie";
import Home from './Home'
import Error from './Error'
import "./App.css"
function App() {
  return (
    <div className="App">
      
  
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="movie/:id" element={<SingleMovie/>}/>
<Route path="*" element={<Error/>}/>
</Routes>


 

    </div>
  );
}

export default App;
