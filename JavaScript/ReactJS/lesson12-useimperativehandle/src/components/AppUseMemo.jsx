import React, { useMemo, useState } from 'react'
import users from '../data/users';
const AppUseMemo = () => {
    const [userId,setUserId] = useState(null);
    const [count,setCount] = useState(0);
    const getUserRows = ()=>  {
        console.log('getUserRows running...');
        return users.map((item)=><li onClick={()=>{setUserId(item.id)}} key={item.id}>{item.name}</li>
    )}
    const userRows = useMemo(()=>getUserRows(),[userId])
  return (
    <div>
        {userId}
      <ul>
        {userRows}
      </ul>
      <hr />
      <h4>Counter App</h4>
      {count}
      <button onClick={()=>{setCount(count+1)
      console.log('count');
    }} style={{marginLeft:"10px"}}>+1</button>
    </div>
  )
}

export default AppUseMemo