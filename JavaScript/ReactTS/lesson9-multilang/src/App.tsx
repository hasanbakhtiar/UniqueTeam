import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface productsType {
    id:number,
    title:string,
    price:string,
    color:string
}

const App = () => {

    const [productsaz,setProductsaz] = useState<productsType[]>([]);
    const [productsen,setProductsen] = useState<productsType[]>([]);
    const [lang,setLang] = useState(localStorage.getItem('lang'));
    useEffect(()=>{
        
            const fetchApiaz = async()=>{
                const comingData = await axios.get('http://127.0.0.1:5500/src/data/productaz.json')
                setProductsaz(comingData.data)
            }
            fetchApiaz();
        
            const fetchApien = async()=>{
                const comingData = await axios.get('http://127.0.0.1:5500/src/data/producten.json')
                setProductsen(comingData.data)
            }
            fetchApien();
        
    },[])

   
        
  return (
    <div>
        <button onClick={()=>{setLang('az');localStorage.setItem('lang','az')}}>az</button>
        <button onClick={()=>{setLang('en');localStorage.setItem('lang','en')}}>en</button>
        <ul>
      {   lang ==='az'?   productsaz.map((item:any,i:number)=>{
                return <><br /><li key={i}>{item.title}</li> <br /><li key={i}>{item.color}</li></>
            }) :       productsen.map((item:any,i:number)=>{
                return <><br /><li key={i}>{item.title}</li> <br /><li key={i}>{item.color}</li></>
            })

        }
            
        </ul>
    </div>
  )
}

export default App