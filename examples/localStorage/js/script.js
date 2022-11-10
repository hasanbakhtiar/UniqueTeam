const h1 = document.querySelector('h1');
const btn = document.querySelector('button');



if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode','green');
}else{
    btn.onclick =()=>{
        if (h1.className == 'red') {
            localStorage.setItem('mode','green');
            h1.className = localStorage.getItem('mode');
        }else{
            localStorage.setItem('mode','red');
            h1.className = localStorage.getItem('mode');
        }
    }
}

h1.className = localStorage.getItem('mode');