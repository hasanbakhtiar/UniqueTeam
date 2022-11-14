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
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var card = "";
    data.map(function (fd, i) {
        card += "\n        <div class='col-12 col-sm-6 col-md-4'>\n        <div class=\"card\" >\n      <img height=\"400\" src=\"".concat(fd.image, "\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(fd.title, "</h5>\n        <p class=\"card-text\">").concat(fd.price, "</p>\n        <a href=\"#\" class=\"btn btn-primary\">Add to card</a>\n      </div>\n    </div>\n        </div>\n        ");
    });
    var listCon = document.querySelector(".row");
    listCon.innerHTML = card;
})["catch"](function (err) { console.log(err); });
