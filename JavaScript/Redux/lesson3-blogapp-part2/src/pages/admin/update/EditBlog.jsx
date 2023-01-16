import React from 'react'
import BlogFrom from '../../../components/BlogFrom'
import { Col } from 'react-bootstrap'

const EditBlog = () => {
  return (
    <div>
    <h1 className='text-center my-5'>Edit Blog</h1>
   <div className="d-flex align-items-center justify-content-center flex-column">
   <Col md={6}>
    <BlogFrom />
    </Col>
   </div>
  </div>
  )
}

export default EditBlog