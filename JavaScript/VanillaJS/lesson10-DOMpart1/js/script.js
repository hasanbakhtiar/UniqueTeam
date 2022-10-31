// for (let index = 0; index <= 10; index++) {
//     if (index > 7 || index < 4) {
//         continue;
//         // break;
//     }
//     console.log(index);

// }

// DOM -> Document Object Model
// OOP -> Object Orianted Programming

// Selectors
// for(let i = 0 ; i<5;i++){
//     document.getElementsByTagName('h1')[i].innerHTML = "Bye";
// }
// document.getElementById('text').innerHTML = "new value";
// document.getElementsByClassName('test')[0].innerHTML = "new value";

// QuerySelectors
// document.querySelector('h1').innerHTML = "new value1"
// document.querySelectorAll('h1')[1].innerHTML = "new value1"

// const mydata = document.querySelector('.text');
// const btn = document.querySelector('button');

// const changeText = ()=>{
// if (mydata.innerHTML === "hello") {
//     mydata.innerHTML = "bye";
// }else{
//     mydata.innerHTML = "hello";

// }
// mydata.innerHTML = "<i>Hello</i>"
// }

// btn.addEventListener('click',changeText);

// multilanguage
import * as data from "../data/data.js";

const langBtn = document.querySelector("#lang");
const langItems = document.querySelectorAll(".nav-link");

const multiLang = () => {
    if (langBtn.innerHTML === "AZ") {
        for (let x in data.langData.az) {
          langItems[x].innerHTML = data.langData.az[x];
        }
        langBtn.innerHTML = "EN"
      }else{
        for (let x in data.langData.en) {
            langItems[x].innerHTML = data.langData.en[x];
        }
        langBtn.innerHTML = "AZ"
      }
};
langBtn.addEventListener('click',multiLang);


