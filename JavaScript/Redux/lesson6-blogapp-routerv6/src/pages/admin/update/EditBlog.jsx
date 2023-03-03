import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { Col,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editBLog, removeBlog } from '../../../actions/blogAction'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = props => {
  const navigate = useNavigate();
  return (
    <div>
    <h1 className='text-center my-5'>Edit Blog</h1>
   <div className="d-flex align-items-center justify-content-center flex-column">
   <Col md={6}>
    <BlogForm editblog={props.pvalue}
    onFormSubmit={a=>{
      props.dispatch(editBLog(props.pvalue.id,a))
      navigate('/login')
    }}
    />
      <Button onClick={()=>{
          props.dispatch(removeBlog({id:props.pvalue.id}))
      navigate('/login')
          
      }} variant="danger" type="submit" className='mt-4'>
          Delete
        </Button>
    </Col>
   </div>
  </div>
  )
}
const MapStateToProps =(state,props)=>{
  
  const link = window.location.pathname;
  const mainpath = link.slice(6,99);
  
  
  return{
    pvalue: state.find(b=>b.id === mainpath)
  }
}

export default connect(MapStateToProps)(EditBlog)