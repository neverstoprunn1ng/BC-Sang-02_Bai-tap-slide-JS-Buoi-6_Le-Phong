var resultEl = document.getElementById("xuatKetQua")
var ketQuaBtnEl = document.getElementById("ketQuaBtn")

ketQuaBtnEl.addEventListener('click', function(){
    var sum = 0
    var i = 0

    while(sum<10000){
        i++
        sum = sum + i
    }  
    resultEl.innerText = "n = " + i
})
