import React from 'react'
import {useDispatch} from 'react-redux'
import authServices from '../../appwrite/config'
import {logout} from '../../store/authSlice'

export const LogoutBtn = () => {

    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authServices.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}
