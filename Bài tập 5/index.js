var txtInputEl = document.getElementById("txtInput")
var ketQuaBtnEl = document.getElementById("ketQuaBtn")
var ketQuaEl = document.getElementById("ketQua")

ketQuaBtnEl.addEventListener('click', function(){
    var n = txtInputEl.value * 1
    var htmlResult = ""
    
        for (i = 2; i <=n ; i++){
            var count = 0
            for (j = 1; j<=i; j++){
                if (i % j == 0){
                  count = count + 1
                }
            }
            if(count < 3){
                htmlResult += + i +" "
            }   
        }
           
        ketQuaEl.innerHTML = htmlResult
    })

    // for (i = 2; i <=n ; i++){
    //     var count = 0
    //     for (j = 2; j<i; j++){
    //         if (i % j == 0){
    //           count = 1
    //         }
    //     }
    //     if(count == 0){
    //         htmlResult += + i +" "
    //     }   
    // }







