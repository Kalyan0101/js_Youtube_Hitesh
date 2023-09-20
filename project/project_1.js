// {
// const container = document.querySelector(".container")
// const grey = document.querySelector("#grey")
// const white = document.querySelector("#white")
// const blue = document.querySelector("#blue")
// const yellow = document.querySelector("#yellow")

// // console.log(white);
// // console.log(blue);
// // console.log(yellow);
// // console.log(grey);

// grey.addEventListener("click", () =>{
//     container.style.backgroundColor = "pink"
// })
// white.addEventListener("click", () =>{
//     container.style.backgroundColor = "black"
// })
// blue.addEventListener("click", () =>{
//     container.style.backgroundColor = "hotpink"
// })
// yellow.addEventListener("click", () =>{
//     container.style.backgroundColor = "burlywood"
// })
// }

const box = document.querySelectorAll(".box")
const body = document.querySelector("body")

// using IF
// {
// box.forEach(function(item){
//     // console.log(item);
//     item.addEventListener("click", (e) =>{
//         // console.log(e);
//         if(e.target.id === "grey"){
//             body.style.backgroundColor = e.target.id;
//             console.log(e.target.id);
//         }
//         if(e.target.id === "white"){
//             body.style.backgroundColor = e.target.id;
//             console.log(e.target.id);
//         }
//         if(e.target.id === "blue"){
//             body.style.backgroundColor = e.target.id;
//             console.log(e.target.id);
//         }
//         if(e.target.id === "yellow"){
//             body.style.backgroundColor = e.target.id;
//             console.log(e.target.id);
//         }
//     })
// })
// }

// using SWITCH
box.forEach((item) =>{
    item.addEventListener("click", (e) =>{
        
        switch(e.target.id){
            case "grey": 
                body.style.backgroundColor = e.target.id;
            break;
            case "white": 
                body.style.backgroundColor = e.target.id;
            break;
            case "blue": 
                body.style.backgroundColor = e.target.id;
            break;
            case "yellow": 
                body.style.backgroundColor = e.target.id;
            break;
            default:
                body.style.backgroundColor = aqua;
        }
    })
})