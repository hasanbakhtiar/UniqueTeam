import { useRef, useState } from "react"

const AppUseRef = () => {
    const [text,setText] = useState();

    const inputRef = useRef<HTMLInputElement>(null);
    let inforef:any;
    const handleClick =()=>{
        console.log(inputRef.current);
        inforef = inputRef.current?.value;
        setText(inforef);
    }
  return (
    <div>
        <h1 style={{color:text}}>{text}</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default AppUseRef