const card = document.querySelector("#card");
const btn = document.querySelector("#btn");

btn.addEventListener('click', ()=>{
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);
    xhr.onreadystatechange = ()=>{
        console.log(xhr.readyState);

        if(xhr.readyState === 4){
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            console.log(data.followers);
            card.style.display = "flex"
            card.innerHTML = `
            <img src="${data.avatar_url}" width="100%">
            <p>${data.followers}</p>
            `
        }
    }
    xhr.send();
})
// #CDD9A3
// #7DF5E2