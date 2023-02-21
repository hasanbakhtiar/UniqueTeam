import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Helmet} from "react-helmet";
const App = () => {
    
    useEffect(()=>{
            const header:any = document.querySelector<HTMLDivElement>('header');
            window.onscroll = ()=>{
                if (document.documentElement.scrollTop > 50) {

                    header.style.zIndex = '9';
                    header.style.opacity = '1';
                    
                }else{
                    header.style.zIndex = '-1';
                    header.style.opacity = '0';

                }
            }
        
        
        
            // var followMouseText:any = document.querySelector<HTMLDivElement>('#followMouse')
            // followMouseText.style.position = 'absolute';
            // followMouseText.style.zIndex = '9';
            // followMouseText.style.color = 'red';
            // window.onmousemove = (e:any)=>{
            //     followMouseText.style.top = e.clientY + "px"
            //     followMouseText.style.left = e.clientX + "px"
            // }
    },[])
    
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
       <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
            </Helmet>
       <header></header>
       <div style={{paddingTop:"100px"}}>
        <div id='followMouse'><img  src="https://img1.picmix.com/output/stamp/normal/0/2/5/3/1573520_207eb.gif" alt="" /></div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <img src="https://images.unsplash.com/photo-1531496080470-6e895c9af2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>


        <h1 className='my-font'>Product List</h1>
       
       
       
       
       </>
      );
}

export default App