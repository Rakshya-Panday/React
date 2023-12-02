import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeButton } from './components/ThemeButton'
import { Card } from './components/Card'
import { ThemeProvider } from './components/Theme'

function App() {
 const[themeMode,setThememode] = useState("dark")
 const darkTheme =()=>{
  setThememode("dark")
 }

 const lightTheme =()=>{
  setThememode("light")
 }

 //actually how theme change.

useEffect(()=>{
 document.querySelector('html').classList.remove("light","dark");
 document.querySelector('html').classList.add(themeMode)


},[themeMode])

  return (
    
    
<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeButton/> 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
  </div>
</ThemeProvider>

    
  )
}

export default App
