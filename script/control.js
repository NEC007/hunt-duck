let active = true;

document.addEventListener("keydown", move);


let horizental = 40;
let vertical = 40;

function move(e) {
    if(actice == true){
    console.log(event.keyCode);
    switch(e.keyCode){
        case 37:{
            horizental -=10;
            break;
        }
        case 38:{
            vertical -=10;
            break;
        }
        case 39:{
            horizental +=10;
            break;
        }
        case 40:{
            vertical +=10;
            break;
        }
        default: 
            break;
    }
    
    if (horizental > 90) {
        horizental = 0;
    }else if ( horizental < 10){
        horizental = 90;
    }else if (vertical >90 ){
        vertical =0;
    }else if (vertical < 10){
        vertical =90;
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

