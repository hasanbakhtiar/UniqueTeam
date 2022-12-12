import React, { Component } from 'react'

export class Search extends Component {
  constructor(){
      super();
      this.state={
        keyword:""
      }
  }
  changeValue=(e)=>{
      this.setState({
        keyword: e.target.value
      })
  }

  formSubmit=(e)=>{
      e.preventDefault();
      this.props.searchValue(this.state.keyword)
  }
  
  
  render() {
    return (
     <>
     <form onSubmit={this.formSubmit}>
            <div className="input-group my-3 ">
            <input onChange={this.changeValue} type="text" className="form-control" placeholder="Enter username"  />
            <button className="btn btn-outline-dark" type="submit" id="button-addon2">Search</button>
            </div>
            {/* {this.state.keyword} */}
     </form>
     
     </>
      
    )
  }
}

export default Search