// import { useState } from 'react'
import "./App.css"
import MainContainer from "./components/MainContainer";
import SimplePaper from "./components/SimplePaper";


function App() {
  return (
    <div className="App">
      <SimplePaper />
      <MainContainer />
      <SimplePaper />
    </div>
  );
}

export default App
