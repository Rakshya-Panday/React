import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { Layout } from './Layout.jsx'
import { About } from './components/About.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children :[
//       {
//         path :"",
//        element :<Home/>
//       },
//       {
//         path : "",
//         element : <About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='' element={<About/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
