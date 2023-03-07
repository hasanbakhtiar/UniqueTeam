import axios from "axios";
import { useState } from "react"

const App = () => {
    const [start,setStart] = useState(Math.floor(Math.random() * 20));
    const [end,setEnd] = useState(Math.floor(Math.random() * 100));
    const [products,setProducts] = useState([]);
    useState(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res:any)=>setProducts(res.data))
        
    })
  return (
    <div>
        {products.slice(start,end).map((item:any)=>{
            return <li>{item.title}</li>
        })}


    </div>
  )
}

export default App