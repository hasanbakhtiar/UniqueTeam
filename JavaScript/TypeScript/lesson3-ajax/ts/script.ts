// const productList:any = document.querySelector('.product-list') as HTMLElement;
// let start:number = Math.floor(Math.random() * 10);
// let end:number = Math.floor(Math.random() * 10);
// fetch('http://127.0.0.1:5500/data/products.json')
// .then((res:any)=>res.json())
// .then((data:any)=>{
//     let li:string = "";
//     data.slice(start,end).map((item:any)=>{
//         li+= `<img width="150" src="${item.photo}">`;
//     })
//     productList.innerHTML = li;
// })


const elem:any = document.getElementById("demo") as HTMLElement

var loadDoc=()=> {
    const xhttp = new XMLHttpRequest();
    console.log(xhttp);
     
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elem.innerHTML =
          this.responseText;
        }
      };
      xhttp.open("GET", "../data/data.txt");
      xhttp.send();
  }

  loadDoc();