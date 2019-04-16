var pai = [1, 1, 2, 2, 3, 3, 4, 4];
var flag = false;
var oneid = -1;
xipai();
function fanpai(id) {
    if (pai[id] == -1) {
        return;
    }
    document.getElementById("img" + id).src = "image/card" + pai[id] + ".png";
    if (flag) {//翻第2張
        if (pai[id] == pai[oneid]) {
            pai[id] = -1;
            pai[oneid] = -1;
        }
        else {
            setTimeout("koupai(" + id + "," + oneid + ")", 600);
        }
        oneid = -1;
        flag = false;
    }
    else {//翻第1張
        oneid = id;
        flag = true;
    }
    checkSuccess();
}
//每次載入頁面重新洗牌
function xipai() {
    var a, b, temp;
    for (i = 0; i < pai.length; i++) {
        var a = Math.floor(Math.random() * pai.length);
        var b = Math.floor(Math.random() * pai.length);
        temp = pai[a];
        pai[a] = pai[b];
        pai[b] = temp;
    }
}
//第一次翻牌 與 第二次翻牌 不相同 不會留住兩張牌
function koupai(id, oneid) {
    document.getElementById("img" + id).src = "image/dogS.jpg";
    document.getElementById("img" + oneid).src = "image/dogS.jpg";
}
//每次翻完 兩張牌以後 檢查是否相同
function checkSuccess() {
    for (var i = 0; i < pai.length; i++) {
        if (pai[i] != -1)
            return;
    }
    alert("恭喜過關!!");
    location.reload();
}