
// let URL = "http://localhost:3000/product"
// fetch(URL).then((response) => {
//     return response.json();
// }).then((data) => {
//     data.map((item) =>{
//         const {title,img} = item;
//         elCard.innerHTML +=`
                
//         <img src="${img}"alt="${title}"/>
            
//             <h2 class="title_card">${title}</h2>  
          
//         `
//     })})


let elCard = document.querySelector(".card");
let elCard2 = document.querySelector(".card2");
let elTitle2 = document.querySelector(".title_card2");
let elTitle = document.querySelector(".title_card");

fetch("http://localhost:3000/product").then((response) => {
    return response.json();
}).then((data) => {
    // console.log(data);
    data.map((item) => {
        const {title,image} = item;
         elCard.innerHTML += `
                <ol class="list">
                    <li class="item">
                        <img class="img__card" src="${image}" alt=""/>
                    </li>
                </ol>                
            `
            elTitle2.innerHTML += `
              <h6 class="card__title"> ${title}</h6>
            `
            elCard2.innerHTML += `
            <ol class="list">
                <li class="item">
                    <img class="img__card" src="${image}" alt=""/>
                </li>
            </ol>  
        `
        elTitle.innerHTML += `
        <h6 class="card__title"> ${title}</h6>
      `

        // console.log(item.title);
    })
})