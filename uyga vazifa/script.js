"use strict";

pokemons.splice(40)

// const AllMovies = movies.map((el) => {
//     return {

//         "title": el.title,
//         "year": el.year,
//         "category": el.category,
//         "id": el.imdbI,
//         "imdbRating": el.imdbRating,
//         "runtime": `${Math.trunc(el.runtime / 60)} h , ${el.runtime % 60} m `,
//         "lang": el.language,
//         "youtubeId": `https://www.youtube.com/embed/${el.youtubeId}`,
//         "summary": el.summary,
//         "smallimg": el.smallThumbnail,
//         "bigimg": el.bigThumbnail
//     }


// })

// "id": 1,
// 	"num": "001",
// 	"name": "Bulbasaur",
// 	"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
// 	"type": [
// 	"Grass",
// 	"Poison"
// 	],
// 	"height": "0.71 m",
// 	"weight": "6.9 kg",
// 	"candy": "Bulbasaur Candy",
// 	"candy_count": 25,
// 	"egg": "2 km",
// 	"spawn_chance": 0.69,
// 	"avg_spawns": 69,
// 	"spawn_time": "20:00",
// 	"multipliers": [
// 	1.58
// 	],
// 	"weaknesses": [
// 	"Fire",
// 	"Ice",
// 	"Flying",
// 	"Psychic"
// 	],
// 	"next_evolution": [
// 	{
// 		"num": "002",
// 		"name": "Ivysaur"
// 	},
// 	{
// 		"num": "003",
// 		"name": "Venusaur"
// 	}
// 	]

const Pokemos = pokemons.map((el) => {
    return {
        "img" : el.img ,
        "name" : el.name ,
        "type" : el.type ,
        "kg" : el.weight ,
        "age" : el.candy_count 
    }
})

console.log(pokemons);

// function AllmoviesRender(){
//     AllMovies.forEach((el) => {
//         const card = createElement('div' , 'card shadow' , `
        
//         <img src="${el.smallimg}" alt="${el.title}" class="card-top-img">
//         <div class="card-body">
//             <h3 class="card-title">${el.title}</h3>

//             <ul class="cad-list p-0 list-unstyled">
//                 <li class="card-list-item"><strong>Year:</strong>${el.year}</li>
//                 <li class="card-list-item"><strong>Language:</strong>${el.lang}</li>
//                 <li class="card-list-item"><strong>Rating:</strong>${el.imdbRating}</li>
//                 <li class="card-list-item"><strong>Category:</strong>${el.category}</li>
//             </ul>
//             <div class="social d-flex">
//                 <a href="${el.youtubeId}" class="btn btn-danger mx-2">
//                     YouYube
//                 </a>
//                 <button class="btn btn-primary mx-2">Read me ...</button>
//                 <button class="btn btn-warning mx-2" data-save>Save</button>
//             </div>
//         </div>
//          `)

//          $('.wrapper').appendChild(card);
//     });
// }
// AllmoviesRender()

const card = document.querySelector("#card")
const wrapper = document.querySelector("#wrapper")

function Allpokemons(){
    pokemons.forEach((el) => {
        card.innerHTML = `
        <img src="${el.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">
                <span><h5><b>${el.name}</b> <span> <br> ${el.type}</span> </h5></span>
                <i class="bi bi-heart"></i>
            </h5>
            <b class="kgandage"> 
                <p>${el.weight}</p>
                <p>${el.candy_count} age</p>
            </b>
        </div>
    `
    wrapper.appendChild("card")

    })
}

Allpokemons()