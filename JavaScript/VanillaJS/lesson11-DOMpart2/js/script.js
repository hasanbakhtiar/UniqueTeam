const btn = document.querySelector('button');
const text= document.querySelector('p');
const input = document.querySelector('input');
btn.onclick = ()=>{
    // text.style.color = 'red';
    // text.style.backgroundColor = 'green';
    // text.style.transition = '1s';
    // text.attributes[1].value = 'blue';
    // text.className = 'blue';
    // text.classList.add('red');
    // text.classList.remove('red');
    // text.classList.toggle('red');
    text.innerHTML = input.value;
}
text.onclick = ()=>{
    text.remove();
}


// btn.onclick = ()=>{
//     text.innerHTML = 'bye'
// };


// btn.addEventListener('mousedown',()=>{
//     text.innerHTML = 'bye'
// });
// mouseenter
// mouseleave
// mouseup
// mousedown
// click
// dblclick
// oneclick
// btn.addEventListener('oneclick',()=>{
//     text.innerHTML = 'hello'
// });
