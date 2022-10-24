const productadd=(item)=>{
    var infoArr = ['table','chair','TV','a','b','c'];
    // infoArr.pop();
    // infoArr.shift();
    // infoArr.push(item);
    // infoArr.unshift(item);
    let x = parseInt(Math.random()*6);
    return infoArr[x];
}

// console.log(productadd('laptop'));
console.log(productadd());
// https://www.w3schools.com/jsref/jsref_tofixed.asp