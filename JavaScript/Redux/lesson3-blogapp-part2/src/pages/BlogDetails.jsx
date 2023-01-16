import React from 'react'
import { connect } from 'react-redux'

const BlogDetails = props => {
  return (
   
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src={props.pvalue.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{props.pvalue.title}</h1>
            <p className="lead">{props.pvalue.desc}</p>
            
            </div>
        </div>
        </div>
      

  )
}
const mapStateToProps =(state,props)=>{
    return{
        pvalue:state.find(q=>{
            return q.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(BlogDetails)