import React, { Component } from 'react'
const userdata=
    {
        email:'hasan@webluna.az',
        password:'hasan123'
    }



class App extends Component {
    constructor(){
        super();
       this.state={
        email:"",
        pass:"",
        alert:"",
        alertColor:"",
        visibleInp:'password',
        visibleIcon:"fa-solid fa-eye"
       }
    }
    formSubmit=(e)=>{
        e.preventDefault();
            if (!this.state.email || !this.state.pass) {
                    this.setState({
                        alert:"plase, fill input!",
                        alertColor:"warning"
                    })
            }else{
                if (this.state.pass === userdata.password && this.state.email === userdata.email) {
                    this.setState({
                        alert:"login successfully",
                        alertColor:"success"
                    })
                }else{
                    this.setState({
                        alert:"email or password is wrong!",
                        alertColor:"danger"
                    })
                }
            }
    }
    passVisible=()=>{
        if (this.state.visibleIcon === "fa-solid fa-eye") {
            this.setState({
                visibleInp:'text',
                visibleIcon:"fa-solid fa-eye-slash"
            })
        }else{
            this.setState({
                visibleInp:'password',
                visibleIcon:"fa-solid fa-eye"
            })
        }
    }
  render() {
    return (
      <>
      <h1 className='text-center mt-5'>Login Page</h1>
        <div className="d-flex align-items-center justify-content-center flex-cloumn mt-5">

        <form className='col-6' onSubmit={this.formSubmit}>
            <p className={`text-center col-12 alert alert-${this.state.alertColor}`}>{this.state.alert}</p>

            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input onChange={(e)=>{this.setState({email:e.target.value})}} type="email" className="form-control"  />
            </div>
           

                <label  className="form-label">Password</label>
            <div className="mb-3 input-group">
                <input onChange={(e)=>{this.setState({pass:e.target.value})}} type={this.state.visibleInp} className="form-control"  />
                <button className='btn btn-outline-dark' type='button' onClick={this.passVisible}><i className={this.state.visibleIcon}></i></button>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


            </div>
      </>

    )
  }
}

export default App