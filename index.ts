type Zene = {
    id: number,
    title: string,
    approved: boolean,
    link: string,
    date: string,
    proponent: string,
    imageurl: string
}

const url:string = "https://eskuvo-anett.nemestamas.hu/api/youtube/"
let kontener:any = document.getElementById("kepekKontener")
let zenek: Zene[] = [];
fetch(url).then(G=>
    G.json()
).then(g=>
    g.forEach((element: Zene) => {
        let zene: Zene = {
            id:2,
            title="a",
            approved=true,
            link="a",
            date="a",
            proponent="a",
            imageurl="a"
        }

        
        kontener.innerHTML+=`<img src='${g.imageurl}'></img>`
        console.log(element)
    })
);