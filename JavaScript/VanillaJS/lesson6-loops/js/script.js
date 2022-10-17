// let info = 1;
// while(info>=10){ //condition
//     console.log(info); //result
//     info++ //action
// }

// let info = 1;
// do{
//     console.log(info); //result
//     info++ //action
// }while(info>=10);//condition

// for(let x = 0; x<=10;x++){
//     console.log("JS"+x);
// }

// ==========================================================================
// Array
// let infoArr = ['table','pen','laptop'];
// let infoArr = new Array('table','pen','laptop');
//  infoArr = new Array('a','pen','laptop');
// console.log(infoArr);


// let infoArr = ['table','pen','laptop'];
// infoArr[0] = 'new value'
// infoArr[3] = 'my value';
// infoArr['hello'] = 'How a u';
// console.log(infoArr['hello']);


// let infoArr=[];
// infoArr[0] = 'table';
// infoArr[1] = 'book';
// console.log(infoArr);

// let infoArr=['table',5,'hello',[1,2,3,[true,['snow',['UniqueTeam'],'sunny']],4,5],'new value'];

// console.log(infoArr[3][3][1][1][0]);

// ==================================================================
// let infoArr = ['table','pen','laptop'];
// for(let x = 0; x<3;x++){
//     console.log(infoArr[x]);
// }


// for(let x in infoArr){
//     console.log(infoArr[x]+x);
// }

// for(let x of infoArr){
//     console.log(x);
// }


// Object

// const infoObj = {
//     name:"hello",
//     color:['red','blue']
// }
// console.log(infoObj.color[0]);

// let infoArr = [
//     {
//         name:'test1',
//         color:'red'
//     },
//     {
//         name:'test2',
//         color:'blue'
//     }
// ]

// console.log(infoArr[0].name);

// for(let x of infoArr){
//     console.log(x.name);
//     console.log(x.color);
// }

let category = 'laptop';
let laptopList = [
    {
        name:"Acer",
        CPU:"i5"
    },
    {
        name:"Asus",
        CPU:"i9"
    }
]

let phoneList = [
    {
        name:"Samsung",
        CPU:"Snapgragon 8 Gen 1"
    },
    {
        name:"Huawei",
        CPU:"Kirin 990"
    }
]
switch(category){
    case 'laptop':
        for(let x of laptopList){
            console.log(x.name);
        }
        break;
    case 'phone':
        for(let x of phoneList){
            console.log(x.name);
        }
        break;
}