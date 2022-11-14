var btn:any = document.querySelector<HTMLButtonElement>('button');
var dataList:any =  document.querySelector<HTMLUListElement>('ul');



btn.onclick=()=>{
    if (dataList.className ==="show") {
        dataList.className ="hide";
    }else{
        dataList.className ="show";
    }
}
