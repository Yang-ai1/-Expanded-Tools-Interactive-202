function move(){
    var text = document.querySelectorAll(".wrapper div");
    for(let i in text){
        window.getComputedStyle(text[i],"::after");
        if(i%4 ==0){
            text[i].classList.add("remove1")   
        }else if(i%4==1){
            text[i].classList.add("remove2")
        }else if(i%4==2){
            text[i].classList.add("remove3")
        }else{
            text[i].classList.add("remove4")
        }
    }
}
function init(){
    var text = document.querySelectorAll(".wrapper div");
    for(let i in text){
        window.getComputedStyle(text[i],"::after");
        if(i%4 ==0){
            text[i].classList.remove("remove1");
        }else if(i%4==1){
            text[i].classList.remove("remove2")
        }else if(i%4==2){
            text[i].classList.remove("remove3")
        }else{
            text[i].classList.remove("remove4")
        }
    }
}

;(function(){
    var flag = false;
    // move2();
    setInterval(() => {
        flag = !flag;
        if(flag) {
            move();
        }
        else {
            init();
        }
    }, 300);
})()
