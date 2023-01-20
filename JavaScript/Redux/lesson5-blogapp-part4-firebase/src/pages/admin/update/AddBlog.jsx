import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import {  addBlogToDatabase } from '../../../actions/blogAction'

const AddBlog = props => {
  return (
    <div>
      <h1 className='text-center my-5'>Add Blog</h1>
     <div className="d-flex align-items-center justify-content-center flex-column">
     <Col md={6}>
      <BlogForm onFormSubmit={fd=>{
        props.dispatch(addBlogToDatabase(fd));
        props.history.push('/admin')
      }}/>
      </Col>
     </div>
    </div>
  )
}

export default connect()(AddBlog)