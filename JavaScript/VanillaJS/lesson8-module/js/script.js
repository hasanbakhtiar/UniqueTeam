// import { productTwo,productOne } from "./productsdata.js";
import * as data from "./productsdata.js";

const prodcutListOne = ()=>{
    for(let x = 0; x<data.productOne.length;x++){
        if (data.productOne[x].category ==='elec') {
            console.log( data.productOne[x].title);
        }
    }
}
// console.log(product.length);
prodcutListOne();


const prodcutListTwo = ()=>{
    for(let x = 0; x<data.productTwo.length;x++){
        if (data.productTwo[x].category ==='elec') {
            console.log( data.productTwo[x].title);
        }
    }
}
// console.log(product.length);
prodcutListTwo();


console.log(data.a);

