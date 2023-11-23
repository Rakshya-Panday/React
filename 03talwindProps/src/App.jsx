import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    name:"Rakshya",
    age:22
  }
  let newarr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Talwind test</h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
       <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/19179471/pexels-photo-19179471/free-photo-of-the-minarets-of-the-mosque-are-covered-in-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
       <div class="pt-6 space-y-4">
       <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
  </figure> */}
  <Card username = "chai aur code" myarr = {myObj} arr = {newarr} />
  <Card username = "rakshya" btnText = "visit me"/>

  
    </>
  )
}

export default App
