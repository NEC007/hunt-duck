document.addEventListener("keydown", move);

let topValue = 40;
let downValue = 40;
let leftValue = 40;
let rightValue = 40;

function move(e) {
    console.log(event.code);
    switch(e.keyCode){
        case 37:{
            topValue +=10;
            break;
        }
        case 38:{
            downValue +=10;
            break;
        }
        case 39:{
            leftValue +=10;
            break;
        }
        case 40:{
            rightValue +=10;
            break;
        }
    }
    
    
    /*
    if (event.keyCode == "38") {
        step += 10;
    }else if (event.keyCode == "37"){
        step +=10;
    }
    else if (event.keyCode == "40"){
        step +=10;
    }else if (event.keyCode == "39"){
        step += 10;
    }
    */
    /*
    if (topValue > 90) {
        topValue = 0;
    }else if (downValue >90){
        downValue =0;
    }else if(leftValue > 90){
        leftValue = 0;
    }else if(rightValue > 90){
        rightValue = 0;
    }
    */
    
    document.querySelector("div").style.top = topValue + '%';
    document.querySelector("div").style.bottom = downValue + '%';
    document.querySelector("div").style.left = leftValue + '%';
    document.querySelector("div").style.right = rightValue + '%';
}
