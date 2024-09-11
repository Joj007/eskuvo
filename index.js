"use strict";
const url = "https://eskuvo-anett.nemestamas.hu/api/youtube/";
let kontener = document.getElementById("kepekKontener");
fetch(url).then(G => G.json()).then(g => g.forEach((element) => {
    kontener.innerHTML += `<img src='${g.imageurl}'></img>`;
    console.log(element);
}));
