import axios from 'axios';
import  { useEffect, useState } from 'react'
import List from './List';

interface userType{
    name:string,
    email:string
}





const Product = () => {
    const [data,setData] = useState<userType[]>([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setData(res.data));
    },[])
  return (
    <ul>
        {data.map((item,i)=>{
            return<List key={i} iname={item.name} iemail={item.email}/>
        })}
    </ul>
  )
}

export default Product