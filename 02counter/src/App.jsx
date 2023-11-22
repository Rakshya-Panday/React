import { useState } from 'react'
import './App.css'

function App() {
 
  let [counter,setCounter]= useState(3)


  // let counter = 15
  const addValue=()=>{
    if(counter>=20){
      console.log("you cant perform the addition")
    }
    else{
      setCounter(counter+1)
    }
//  counter = counter+1
//  console.log("clicked",Math.random())

  }
  const subValue=()=>{
    if(counter<=0){
      console.log("you cant perform")
    }
   else{
    setCounter(counter-1)
  }
   }


  return (
    <>
      <h1>chai aur react{counter}</h1>
      <h2>Counter value :{counter}</h2>
      <button  onClick={addValue}
      >Add Value{counter}</button><br />
      <button onClick={subValue}>Decrese Value</button>
    </>
  )
}

export default App
