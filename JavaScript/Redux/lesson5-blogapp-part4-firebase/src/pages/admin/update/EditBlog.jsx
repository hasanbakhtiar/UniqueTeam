import React from 'react'
import BlogForm from '../../../components/BlogForm'
import { Col,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import {  editBlogFromDatabase, removeBlogFromDatabase } from '../../../actions/blogAction'

const EditBlog = props => {
  return (
    <div>
    <h1 className='text-center my-5'>Edit Blog</h1>
   <div className="d-flex align-items-center justify-content-center flex-column">
   <Col md={6}>
    <BlogForm editblog={props.pvalue}
    onFormSubmit={a=>{
      props.dispatch(editBlogFromDatabase(props.pvalue.id,a))
      props.history.push('/admin')
    }}
    />
      <Button onClick={()=>{
          props.dispatch(removeBlogFromDatabase(props.pvalue.id))
          props.history.push('/admin')
      }} variant="danger" type="submit" className='mt-4'>
          Delete
        </Button>
    </Col>
   </div>
  </div>
  )
}
const mapStateToProps =(state,props)=>{
  return{
    pvalue: state.find(b=>{
      return b.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditBlog)