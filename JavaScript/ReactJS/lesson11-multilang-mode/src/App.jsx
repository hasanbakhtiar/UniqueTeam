import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './i18n/i18next';
import { useTranslation } from 'react-i18next';
import ModeTop from './components/ModeTop';
import ModeBtn from './components/ModeBtn';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleCart from './components/SingleCart';
import schoolproduct from './data/schoolproduct';

const App = () => {
  const {t, i18n} = useTranslation();
  const handleClick = (lang)=>{
    i18n.changeLanguage(lang);
  }

  const [mode,setMode]= useState(localStorage.getItem('imode'))

  useEffect(()=>{
    localStorage.setItem('imode',mode);
    document.body.className = mode;
  },[mode])
  return (
    <Container className='mt-5'>

        <div>
          <ModeTop color={mode}/>
          <ModeBtn color={mode} setColor={setMode}/>
        </div>
      
      
        <div className='mt-5'>
          <Button  onClick={()=>handleClick('az')}>AZ</Button>
          <Button className='ms-3' onClick={()=>handleClick('en')}>EN</Button>
          <Button className='ms-3' onClick={()=>handleClick('es')}>ES</Button>
          <h1>{t('entertext.0')}</h1>
        </div>

        <div className="mt-5">
          <div className="row g-5">
           {schoolproduct.map(item=>(
            <SingleCart 
            key={item.id}
            title={t(`schoolproduct.${item.id}`)}
            price={item.price}
            />
           ))}

          </div>
        </div>
    </Container>
  )
}

export default App