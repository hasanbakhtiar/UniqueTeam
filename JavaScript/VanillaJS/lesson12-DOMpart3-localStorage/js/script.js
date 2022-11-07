// localStorage.removeItem('text');
// localStorage.setItem('data-one','text one');
// localStorage.setItem('data-two','text two');
// localStorage.removeItem('data-one')
// localStorage.clear();
// const text = document.querySelector('h1');
// const p = document.querySelector('p');
// text.innerHTML = localStorage.getItem('data-one');
// p.innerHTML = localStorage.getItem('data-two');

const nav  = document.querySelector('nav');
const modeBtn = document.querySelector('#mode');

const mode ={
    'light':"navbar navbar-expand-lg navbar-light bg-light",
    'dark' :"navbar navbar-expand-lg navbar-dark bg-dark"
}

if (localStorage.getItem('mode')===null) {
    localStorage.setItem('mode',mode.light);
}else{
    modeBtn.onclick =(e)=>{
        e.preventDefault();
        if (nav.className === mode.light) {
            localStorage.setItem('mode',mode.dark);
            nav.className = localStorage.getItem('mode');
        }else{
            localStorage.setItem('mode',mode.light);
            nav.className = localStorage.getItem('mode');
        }
    }
    
    nav.className = localStorage.getItem('mode');
}

// multiLang


const langBtn = document.querySelector('#lang');
const langItems = document.querySelectorAll('.nav-link');


const langData ={
    az:["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"],
    en:["Home","About","Services","Blog","Contact"],
}

langBtn.onclick=(e)=>{
    e.preventDefault();
    if (langBtn.innerHTML === 'AZ') {
        localStorage.setItem('lang',langData.az);
        localStorage.setItem('langbtn',"EN");
        langBtn.innerHTML = "EN";
        for(let x in langData.az){
            langItems[x].innerHTML = langData.az[x];  
        }
    }else{
        localStorage.setItem('lang',langData.en);
        localStorage.setItem('langbtn',"AZ");
        langBtn.innerHTML = "AZ";
        for(let x in langData.en){
            langItems[x].innerHTML = langData.en[x];  
        }
    }
}

for(let x in langData.az){
    langItems[x].innerHTML = localStorage.getItem('lang').split(',')[x];
}
langBtn.innerHTML = localStorage.getItem('langbtn');


