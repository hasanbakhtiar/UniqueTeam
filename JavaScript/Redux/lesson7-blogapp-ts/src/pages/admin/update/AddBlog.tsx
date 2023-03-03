import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addBlog } from '../../../actions/blogAction'
import { useNavigate } from 'react-router-dom'

const AddBlog = (props:any) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-center my-5'>Add Blog</h1>
     <div className="d-flex align-items-center justify-content-center flex-column">
     <Col md={6}>
      <BlogForm blogSubmit={(fd:any)=>{
        props.dispatch(addBlog(fd));
        navigate('/login')
      }}/>
      </Col>
     </div>
    </div>
  )
}

export default connect()(AddBlog)