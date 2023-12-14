import React from 'react'

 const Button = ({
    children,
    type= 'button',
    bgColor ='bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) => {
  return (
  <button className={`p-4 m-4  ml-0 py-2 rounded-lg font-bold w-full bg-blue-500 ${className}${bgColor} ${textColor}`}{...props}>
    {children}
  </button>
  )
}

export default Button;
