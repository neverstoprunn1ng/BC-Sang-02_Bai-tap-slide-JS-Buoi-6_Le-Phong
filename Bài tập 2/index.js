var xEl = document.getElementById("txtX")
var nEl = document.getElementById("txtN")
var ketQuaBtnEl = document.getElementById('ketQuaBtn')
var ketQuaEl = document.getElementById("ketQua")

ketQuaBtnEl.addEventListener('click', function(){
    var multiply 
    var sum = 0
    var x = xEl.value * 1
    var n = nEl.value * 1

    for(i = 1; i<=n; i++){
        multiply = i * x
        sum = sum + multiply
    }
    ketQuaEl.innerText = sum
})



