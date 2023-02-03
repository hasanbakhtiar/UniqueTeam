
import React,{useState,createContext, useEffect} from "react";
// import Userdata from '../data/Userdata'
interface propType{
    children:any[],
}
type AppContextType = {}
export const UserContext = createContext<AppContextType|null>(null);

export const UserProvider =(props:propType)=>{
    const [users,setUsers] = useState<AppContextType>(false);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )

}