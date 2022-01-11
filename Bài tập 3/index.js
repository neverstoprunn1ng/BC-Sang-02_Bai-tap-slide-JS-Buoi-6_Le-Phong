var inputEl = document.querySelector("#txtInput")
var ketQuaBtnEl = document.querySelector("#ketQuaBtn")
var ketQuaEl = document.querySelector("#ketQua")

ketQuaBtnEl.addEventListener('click', function(){
    var result = 1
    var n = inputEl.value * 1
    
    for(i = 1; i<=n; i++){
        result = result*i
    }
    ketQuaEl.innerText = result
})