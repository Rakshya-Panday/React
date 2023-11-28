import React from 'react'
import {Link,NavLink} from 'react-router-dom'
// Instead of a tag we use link tag in react and react router dom because a tag refresh the whole page so use link tag.
//Link and navlink almost same as navlink contains the additional things used to instead of href.


function Header() {
  return (
   <div>
    <div>Your logo</div>
    <li className='ml-5 '>
        <NavLink className={(isActive)=>`${isActive?"text-orange-500":"text-gray-700"} `}>
            Home
        </NavLink>
        <NavLink className={(isActive)=>`${isActive?"text-orange-500":"text-gray-700"}`}>
            About
        </NavLink>
        <Link>LogIn</Link>
        <button >Get Started</button>
    </li>
   </div> 
  )
}

export default Header