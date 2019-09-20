let active = true;

document.addEventListener("keydown", move);


let horizental = 40;
let vertical = 40;

function move(e) {
    if(active == true){
    console.log(event.keyCode);
    switch(e.keyCode){
        case 37:{
            horizental -=5;
            break;
        }
        case 38:{
            vertical -=5;
            break;
        }
        case 39:{
            horizental +=5;
            break;
        }
        case 40:{
            vertical +=5;
            break;
        }
        default: 
            break;
    }
    
    if (horizental > 95) {
        horizental = 0;
    }else if ( horizental < 5){
        horizental = 95;
    }else if (vertical >95 ){
        vertical =0;
    }else if (vertical < 5){
        vertical =95;
    }
    
    
    document.querySelector("div").style.top = vertical + '%';
    document.querySelector("div").style.left = horizental + '%';
   
}
}

const bird = document.querySelector("#target");
    
    
    bird.addEventListener("click", win);
    
    

    function win(e) {
      console.log("you won!");
      
      bird.style.backgroundColor = "red";
      alert("it's victory!");
      active = false;
      
      
    }

