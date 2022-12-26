import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const AppUseEffect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('useEffect is running');
    },[count])
  return (
    <Container mt={5}>
        <div>{count}</div>
        <button onClick={()=>{setCount(count+1)}}>action</button>
    </Container>
  )
}

export default AppUseEffect