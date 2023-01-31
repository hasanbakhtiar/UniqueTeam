
import { useState } from 'react'
import Login from './components/Login'

const App = () => {
  const [log,setLog] = useState(true);
  return (
    <div>
      <Login info='Hasan' message={20} login={log}/>
      <button onClick={()=>{ log ? setLog(false):setLog(true) }}>
      {log ? <span>Log out</span>:<span>Login</span>}
      </button>
    </div>
  )
}

export default App
