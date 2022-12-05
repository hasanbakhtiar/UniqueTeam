import React, { Fragment } from "react";
import  ReactDOM  from "react-dom";
import './sass/style.scss';
import myphoto from './img/unsplash.jpg'

class ListOne extends React.Component{
    render(){
        return(
            <>
            <ul>
                <li>pen</li>
                <li>pen</li>
                <li>pen</li>
                <li>pen</li>
            </ul>
            </>
        );
    }
}



class ListTwo extends React.Component{
    render(){
        return(
            <>
            <ul>
                <li>table</li>
                <li>table</li>
                <li>table</li>
                <li>table</li>
                <ListOne/>
            </ul>
            </>
        );
    }
}



class App extends React.Component{
    render(){
        return(
            <Fragment>
                <h1>Hello React with Webpack</h1>
                <img src={myphoto} width="300" alt="" />
                <ListTwo />
            </Fragment>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'));