import React from 'react'
// interface propsType{
//     iname:string,
//     iemail:string
// }
type propsType = {
      iname:string,
      iemail:string  
}
const List = (props:propsType) => {
  return (
    <>
       <li>{props.iname}</li> 
       <li>{props.iemail}</li> 
    </>
  )
}

export default List