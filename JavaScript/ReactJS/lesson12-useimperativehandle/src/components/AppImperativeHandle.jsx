import  { forwardRef, useImperativeHandle, useRef, useState } from 'react'


// infoOne();
// Function Expression
// const infoOne = function(){
//     console.log("InfoOne is running...");
// }


// ========================================================



// infoTwo();
// Function Declaration
// function infoTwo(){
//     console.log("infoTwo is running...");
// }


const MyInput =forwardRef((props,ref)=>{
    const [fontSize,setFontSize] = useState(14)
    useImperativeHandle(ref,()=>({
        hi:sayHi,
        incFont:()=>{setFontSize(fontSize+2)},
        decFont:()=>{setFontSize(fontSize-2)}
    }))
    
    const sayHi =()=>{
        alert("Hello")
    }
        return (
            <input type="text" style={{fontSize}}/>
        )
})


const AppImperativeHandle = () => {
    const inputRef = useRef();
    const handleClick = ()=>{
       inputRef.current.hi();
    }
  return (
    <div>
        <h1 className='text-danger'>Hello</h1>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>click</button>
        <button onClick={()=>{inputRef.current.incFont()}}>+</button>
        <button onClick={()=>{inputRef.current.decFont()}}>-</button>
        
    </div>
  )
}

export default AppImperativeHandle