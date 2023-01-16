import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Dashboard = props => {
  return (
  <>
  
  <h1 className='text-center my-5'>Admin Dashboard</h1>
  <Link to='/add'><Button  className="mb-5" variant='primary'>Add</Button></Link>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Blog photo</th>
        <th>Blog title</th>
        <th>Blog description</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
        {props.pvalue.map((item,i)=>(
    <tr>
        <td>{i+1}</td>
        <td><img width={50} src={item.img} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.desc.substring(0,30)}</td>
        <td><Link to={`/edit/${item.id}`}><Button variant='warning'>Edit</Button></Link></td>
      </tr>
        ))}
    
      
    </tbody>
  </Table>
  
  </>

  )
}

const mapStateToProps =(state)=>{
    return{
        pvalue:state
    }
}

export default connect(mapStateToProps)(Dashboard)