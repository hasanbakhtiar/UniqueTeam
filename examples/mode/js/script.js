const modeBtn = document.querySelector('.mode-btn');
const nav = document.querySelector('nav');
const input = document.querySelector('input');
const text = document.querySelector('h1');
const mode = document.querySelector('#mode');
modeBtn.onclick=(e)=>{
    e.preventDefault();
    if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
        modeBtn.innerHTML = "🌞";
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
        modeBtn.className = "btn btn-outline-light mode-btn";
        document.body.className = 'bg-dark';
        text.innerHTML = `<h1 class="text-light">${input.value}</h1>`;
        mode.className = "dark-mode";
    }else{
        modeBtn.innerHTML = "🌙"
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";
        modeBtn.className = "btn btn-outline-dark mode-btn";
        document.body.className = 'bg-light';
        text.innerHTML = `<h1 class="text-dark">${input.value}</h1>`;
        mode.className = "light-mode";


    }
}