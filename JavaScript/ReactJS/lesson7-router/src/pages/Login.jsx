import { useState } from "react"
import { useNavigate } from "react-router-dom";

const user = {
    email:'hasan@webluna.az',
    pass:'hasan123'
}

const Login =()=>{
        const [email,setEmail] = useState();
        const [password,setPass] = useState();
        const navigate = useNavigate()
        const formSubmit =(e)=>{
                e.preventDefault();
                if (!email || !password) {
                    alert('please, fill input!')
                }else{
                    if (email === user.email && password === user.pass) {
                        navigate('/products')
                    }else{
                        alert('email or password is wrong!')
                    }
                }
        }

    
    return(
            <>
            <h1 className="my-5 text-center">LOGIN</h1>
       <div className="d-flex align-items-center justify-conetnt-center flex-column my-5">
       <form onSubmit={formSubmit} className="col-4">
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  />
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input onChange={(e)=>{setPass(e.target.value)}} type="password" className="form-control" />
        </div>
 
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

       </div>
            
            </>
    )
}

export default Login



// import React, { Component } from 'react'

// class Login extends Component {
//     constructor(){
//         super()
//         this.state={

//         }
//     }
//   render() {
//     return (
//       <div>Login</div>
//     )
//   }
// }

// export default Login

// function LoginOne (){
//     return(
//         <h1>Login One</h1>
//     )
// } 

// const LoginTwo =()=>{
//     return(
//         <h1>Login Two</h1>
//     )
// }