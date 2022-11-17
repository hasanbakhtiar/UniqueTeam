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
var input = document.querySelector('input');
var todolist = document.querySelector('ul');
var addBtn = document.querySelector('button');
addBtn.onclick = function () {
    if (input.value == "") {
        alert('fill the gap');
    }
    else {
        var li_1 = document.createElement('li');
        li_1.innerHTML = input.value;
        todolist.appendChild(li_1);
        input.value = "";
        li_1.onclick = function () {
            li_1.style.textDecoration = "line-through";
        };
        li_1.ondblclick = function () {
            li_1.remove();
        };
    }
};
input.onkeydown = function () {
    input.style.height = "50px";
    input.style.transition = '1s';
    input.style.backgroundColor = 'red';
};
input.onkeyup = function () {
    input.style.height = "20px";
    input.style.transition = '1s';
    input.style.backgroundColor = 'white';
};
addBtn.accessKey = "w";
// todo app end
