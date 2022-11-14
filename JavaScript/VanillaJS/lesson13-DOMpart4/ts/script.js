var btn = document.querySelector('button');
var dataList = document.querySelector('ul');
btn.onclick = function () {
    if (dataList.className === "show") {
        dataList.className = "hide";
        btn.innerHTML = ">";
    }
    else {
        dataList.className = "show";
        btn.innerHTML = "X";

    }
};
