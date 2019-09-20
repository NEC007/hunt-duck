document.addEventListener("keydown", move);

let topValue = 40;

function move(event) {
    console.log(event.code);
    if (event.code === "ArrowDown") {
        topValue += 10;
    }
    if (topValue > 90) {
        topValue = 0;
    }
    document.querySelector("div").style.top = topValue + '%';
}
