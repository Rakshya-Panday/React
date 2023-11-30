import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export const Github = () => {
    // const data = useLoaderData()
    const[data,setData] = useState([])
   useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response=>response.json)
    .then(data=>{
        setData(data)
    })
   },[]) 
  return (
  <>
   <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers :{data.followers}</div>
    <img src={data.avatar_url} alt=" Git Picture" />
  </> 
  )
}


export const GithubInfoLoader = async()=>{
     const response = fetch('https://api.github.com/users/hiteshchoudhary')
    return (await response).json()
}
