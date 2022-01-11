var ketQuaBtnEl = document.getElementById("ketQuaBtn");

var htmlResult= ""

ketQuaBtnEl.addEventListener('click', function(){
    
    
    for( var i = 1; i <=10; i++){

                if(i % 2 == 0){   
                    htmlResult += "<div style='background: red;'>" + "thẻ div " + i +"</div>" + "<br>"
                }
                else{
                    htmlResult += "<div style='background: aqua;' >" + "thẻ div " + i +"</div>" + "<br>"
                }
    }
    
    document.getElementById("ketQua").innerHTML = htmlResult

   
})
  