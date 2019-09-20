document.addEventListener("keydown", move);

let topValue = 40;
let downValue = 40;
let leftValue = 40;
let rightValue = 40;

function move(event) {
    console.log(event.code);
    if (event.code === "ArrowDown") {
        topValue += 10;
    }else if (event.keycode === "40"){
        downValue +=10;
    }
    else if (event.keycode === "39"){
        leftValue +=10;
    }else if (event.keycode === "38"){
        rightValue += 10;
    }

    if (topValue > 90) {
        topValue = 0;
    }else if (downValue >90){
        downValue =0;
    }else if(leftValue > 90){
        leftValue = 0;
    }else if(rightValue > 90){
        rightValue = 0;
    }
    document.querySelector("div").style.top = topValue + '%';
}
