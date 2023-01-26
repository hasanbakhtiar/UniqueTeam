import React from 'react'
import { Button } from 'react-bootstrap'

const ModeBtn = ({color,setColor}) => {
    const switchMode = ()=>{
        setColor(color === 'bg-light'?'bg-dark':'bg-light');
    }
  return (
    <div><Button onClick={switchMode}>mode</Button></div>
  )
}

export default ModeBtn