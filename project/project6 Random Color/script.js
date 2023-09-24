const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");


const color = () => {
    const hex = '0123456789ABCDEF'
    let bColor = '#';
    for (let i = 0; i < 6; i++) {
        let rand = hex[Math.floor(Math.random() * 16)];
        bColor += rand;
    }
    return bColor;
}

let intervelId;
start.addEventListener('click', (e) => {
    console.log('Start!');

    if (!intervelId) {
        intervelId = setInterval(() => {
            let value = color()
            body.style.backgroundColor = value;
            // console.log(value);
        }, 1000)
    }
    e.stopPropagation();
})

stop.addEventListener('click', () => {
    clearInterval(intervelId);
    intervelId = null;

})

// clear the intervel at any time of clicking on the screen
window.addEventListener('click', (e) => {
    if (intervelId) { // can be access, when the variable in not empty
        console.log('stoped!');
        clearInterval(intervelId);
        intervelId = null;
    }
})