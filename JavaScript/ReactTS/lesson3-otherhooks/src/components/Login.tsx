import React from 'react'
interface propsType{
    info:string,
    message:number,
    login:boolean
}

const Login = (props:propsType) => {
  return (
    <div>
        {props.login ? <h1>Welcome {props.info}, you have {props.message}.</h1> :<h1>Welcome Guest!</h1>}
        
    </div>
  )
}

export default Login