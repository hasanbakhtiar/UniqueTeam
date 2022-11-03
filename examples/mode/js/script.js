const modeBtn = document.querySelector('.mode-btn');
const nav = document.querySelector('nav');

modeBtn.onclick=(e)=>{
    e.preventDefault();
    if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
        modeBtn.innerHTML = "🌞";
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
        modeBtn.className = "btn btn-outline-light mode-btn";
        document.body.className = 'bg-dark';

    }else{
        modeBtn.innerHTML = "🌙"
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";
        modeBtn.className = "btn btn-outline-dark mode-btn";
        document.body.className = 'bg-light';
    }
}