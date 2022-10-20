// function name(params){action}

// function info(){
//     console.log("This function is running...");
// }
// info();

// function mydata(name,surname,birthday){
//     return name+" "+surname + " " + (2022-birthday);
// }
// console.log(mydata("Hasan","Bakhtiar",1997));
// console.log(mydata("Murad","Quliyev",2004));

// (function info(a,b){
//     console.log('this funtion is running...'+(a+b));
// })(10,20)

// function info(a,b){
//     console.log(a+b);
// }
// console.log(info(20,30));

// function info(a=10,b=30){
//     return a+b
// }
// // NaN => not a number
// console.log(info(20,100));

// ES6
// Arrow function
// const  info =(a,b)=>{
//     return a+b
// }
// console.log(info(10,20));

// const info = function (a, b) {
//   return a + b;
// };
// console.log(info(20,30));

const car={
    brand:"BMW",
    color:['red','green'],
    newCar:false,
    year:2022,
    // speed:(km,hour)=>{return km/hour+"km/h"}
    speed:function(km,hour=1){return km/hour+"kliometr/saat"}
}
// console.log(car.speed(200,2));
const carBuy=()=>{
    if (car.newCar === true) {
        console.log(car.speed(0));
        switch(car.newCar){
            case true:
                console.log('this car is new');
            break;
        }
    }else{
        console.log(car.speed(200,2));
        switch(car.newCar){
            case false:
                console.log('this car is old');
            break;
        }
    }
}
console.log(carBuy());
