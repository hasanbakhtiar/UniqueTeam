import React from 'react'
import SingleCard from '../components/SingleCard'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const BlogList = props => {
  return (
    <Container className='mt-5'>
        <h1 className='text-center my-5'>Blogs </h1>
       <Row className='g-5'>
       {props.pvalue.map((item,i)=>{
            return <SingleCard id={item.id} key={i} photo={item.img} title={item.title} desc={item.desc}/>
        })}
       </Row>
        
    </Container>
  )
}

const mapStateToProps =(state)=>{
    return{
        pvalue:state
    }
}

export default connect(mapStateToProps)(BlogList)