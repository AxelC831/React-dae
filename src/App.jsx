import { useState } from 'react'
import './App.css'
import "./Components/Card"
import Card from "./Components/Card"
import Hero from "./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero /> 
    {count}
    <button onClick={() => setCount(count + 1)}>+</button>
     <Card 
     image="https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg"
        name="Axel"
        city="Stamford"
        job="Photographer"  
      />
   <Card 
     image="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/17/16607415618957.jpg"
        name="Tom Holland"
        city="Stamford"
        job="Actor"  
      />
      </>
  )
}

export default App
