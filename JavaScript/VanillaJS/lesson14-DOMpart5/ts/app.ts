document.body.style.backgroundColor = '#333';
document.body.style.color = '#fff';
// var result:any = document.querySelector<HTMLParagraphElement>('.result');
// var list:any = document.querySelector<HTMLUListElement>('ul');


// result.innerHTML = list.childNodes[2].nodeName;
// result.innerHTML = list.childNodes[2].parentNode.nodeName;
// result.innerHTML = list.lastChild.previousSibling.firstChild.nodeValue;

// var myNewTag:any =  document.createElement('h1');
// var myNewText:any = document.createTextNode("Hello new node");
// myNewTag.appendChild(myNewText);
// document.body.appendChild(myNewTag);
// todo app start


var input:any = document.querySelector<HTMLInputElement>('input');
var todolist:any = document.querySelector<HTMLUListElement>('ul');
var addBtn:any = document.querySelector<HTMLButtonElement>('button');
addBtn.onclick=()=>{
  if (input.value == "") {
        alert('fill the gap')
  }else{
    let li:any = document.createElement('li');
    li.innerHTML = input.value;
    todolist.appendChild(li);
    input.value="";
    li.onclick=()=>{
        li.style.textDecoration = "line-through"
    }
    li.ondblclick=()=>{
        li.remove();
    }
  }
}
input.onkeydown=()=>{
    input.style.height="50px";
    input.style.transition='1s';
    input.style.backgroundColor = 'red';
}
input.onkeyup=()=>{
    input.style.height="20px";
    input.style.transition='1s';
    input.style.backgroundColor = 'white';
}
addBtn.accessKey = "w";
// todo app end