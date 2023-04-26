
"use strict";

movies.splice(50) ;


//--------------------NORMALIZATION DATA----------------------------
const AllMovies = movies.map((el) => {
    return {

        "title": el.title,
        "year": el.year,
        "category": el.categories,
        "id": "tt7026230",
        "imdbRating": el.imdbRating,
        "runtime":` ${Math.trunc(el.runtime / 60)} h , ${el.runtime % 60} m `,
        "lang": el.language,
        "youtubeId":` https://www.youtube.com/embed/${el.youtubeId}`,
        "summary": el.summary,
        "smallimg": el.smallThumbnail,
        "bigimg": el.bigThumbnail
    }


})
//--------------------NORMALIZATION DATA END----------------------------






//---------------------RENDER ALL MOVIES ----------------------------------------------


function AllmoviesRender(){
    AllMovies.forEach((el) => {
        const card = createElement('div' , 'card shadow'             , `
        
        <img src="${el.smallimg}" alt="${el.title}" class="card-top-img">
        <div class="card-body">
            <h3 class="card-title">${el.title}</h3>

            <ul class="cad-list p-0 list-unstyled">
                <li class="card-list-item"><strong>Year:</strong>${el.year}</li>
                <li class="card-list-item"><strong>Language:</strong>${el.lang}</li>
                <li class="card-list-item"><strong>Rating:</strong>${el.imdbRating}</li>
                <li class="card-list-item"><strong>Category:</strong>${el.category}</li>
            </ul>
            <div class="social d-flex">
                <a href="${el.youtubeId}" class="btn btn-danger mx-2">
                    YouYube
                </a>
                <button class="btn btn-primary mx-2">Read me ...</button>
                <button class="btn btn-warning mx-2">Save</button>
            </div>
        </div>
         `)

         $('.wrapper').appendChild(card);
    });
}


AllmoviesRender()





//---------------------RENDER ALL MOVIES END----------------------------------------------



//---------------------DYNAMIC CATEGORY------------------------------------------

function category() {
    const category=[] ;

    AllMovies.forEach((el) => {
        el.category.forEach((e)=> {
            if(!category.includes(e)) {
                category.push(e)
            }
        })
        
    })
    category.sort() ;
    category.forEach((e) => {
        const option = createElement('option' , "ss" , e) ;

        document.querySelector("#cotegory").appendChild(option)
    });

}

category()

//---------------------DYNAMIC CATEGORY END---------------------------------------



// -----------------SEARCH FILM------------------

const searchFilm = function(query , rating ){
    return  AllMovies.filter((value, ) => {
        return value.title.match(query) && value.imdbRating>=rating ;
    })
}




$("#result").addEventListener('click' , (e)=> {
    $(".wrapper").innerHTML = `<span class="loader"></span>`
    let inputValue = $("#search").value.trim();
    let rating = $("#rating").value.trim();
    let categor = $('.ss').value.trim()
    const regex = new RegExp(inputValue , "gi");
    


    let result =  searchFilm(regex , rating, categor)


    setTimeout(()=> {
        findeRender(result);
    },2000);
});






function findeRender(data=[]) {
    $(".wrapper").innerHTML = ""
    data.forEach((el) => {
        const card = createElement('div' , 'card shadow' , `
        
        <img src="${el.smallimg}" alt="${el.title}" class="card-top-img">
        <div class="card-body">
            <h3 class="card-title">${el.title}</h3>
            <ul class="cad-list p-0 list-unstyled">
                <li class="card-list-item"><strong>Year:</strong>${el.year}</li>
                <li class="card-list-item"><strong>Language:</strong>${el.lang}</li>
                <li class="card-list-item"><strong>Rating:</strong>${el.imdbRating}</li>
                <li class="card-list-item"><strong>Category:</strong>${el.category}</li>
            </ul>
            <div class="social d-flex">
                <a href="${el.youtubeId}" class="btn btn-danger mx-2">
                    YouYube
                </a>
                <button class="btn btn-primary mx-2">Read me ...</button>
                <button class="btn btn-warning mx-2">Save</button>
            </div>
        </div>
         `)

         $('.wrapper').appendChild(card);
    })
}