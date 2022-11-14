// var text:any = document.querySelector<HTMLParagraphElement>('p');
// var mydata:number =  5;


// var info : {
//     name:string,
//     surname:string,
//     age:number
// }
// info={
//     name:"Jony",
//     surname:'Morgan',
//     age:20
// }
// text.innerHTML = info.name;


fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((data:any)=>{
    let card:string = "";
    data.map((fd:any,i:number)=>{
        card+=`
        <div class='col-12 col-sm-6 col-md-4'>
        <div class="card" >
      <img height="400" src="${fd.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${fd.title}</h5>
        <p class="card-text">${fd.price}</p>
        <a href="#" class="btn btn-primary">Add to card</a>
      </div>
    </div>
        </div>
        `
    })
    let listCon:any = document.querySelector<HTMLObjectElement>(".row");
    listCon.innerHTML = card;

})
.catch((err)=>{console.log(err);})