import React from 'react'

interface propType{
    name:string
}


const Info = (props:propType) => {
  return (
    <div>
        {props.name}
    </div>
  )
}

export default Info