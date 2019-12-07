$("#yearButton").on("click", function(event){
    event.preventDefault();
    searchAnimeYear();
});

// returns all animes from 1-setNumber made in a given year
function searchAnimeYear()
{

for (let i=1; i<500; i++)
    {

$.ajax({
    url: "https://kitsu.io/api/edge/anime/" + [i],
    method: "GET",
       })
.then(function(response)
        {
// console.log(response);
           let year = JSON.parse(localStorage.getItem("year"))
            if(response.data.attributes.startDate.split("-")[0] === year){
     
    // console.log(response.data.attributes.canonicalTitle);
    // console.log(response.data.attributes.startDate.split("-")[0]);
    // console.log(response.data.attributes.posterImage.original);
    // console.log(response.data.attributes.averageRating);
    // console.log(response.data.attributes.synopsis);

    let animeName = response.data.attributes.canonicalTitle;
    let animeYear = response.data.attributes.startDate.split("-")[0];
    let animePoster = response.data.attributes.posterImage.original;
    let animeRating = response.data.attributes.averageRating; 
    let animeSynopsis = response.data.attributes.synopsis; 

    let newDiv = $("<div>");
                newDiv.attr("class", "anime_div")
    let newImg = $("<img>");
                newImg.attr("src", animePoster);
                newImg.attr("height", 200);
                newImg.attr("width", 120);
                newImg.attr("alt", "Poster");
    let name = $("<p>").text("Title: " + animeName);
    let year = $("<p>").text("Year: " + animeYear);
    let synopsis = $("<p>").text("Synopsis: " + animeSynopsis);
    let rating = $("<p>").text("Average Rating: " + animeRating);

    $("body").append(newDiv);
    newImg.appendTo(newDiv);
    name.appendTo(newDiv);
    rating.appendTo(newDiv);
    synopsis.appendTo(newDiv); 


            }
            
        })
    }
}
// searchAnimeYear(); 




// returns all anime of a given genre *needs work
function searchAnimeGenre()
{

$.ajax({
    url: "https://kitsu.io/api/edge/anime/?filter[genres]=action,comedy,sci-fi",
    // need sort??
    method: "GET",
       })
.then(function(response)
        {
 
console.log(response);

        })
    
}
// searchAnimeGenre(); 





// returns the GENRE DATA of animes from 1-setNumber
function searchGenres()
{

    for(let i=1; i<10; i++ )
    {
        $.ajax({
            url: "https://kitsu.io/api/edge/anime/" + [i] + "/genres",
            method: "GET"
        })
        .then(function(response)
            {
            let array = response.data
            for (i=0; i<array.length; i++){
                console.log(array[i].attributes.name);
                console.log(i);
    
            }
        
            })
    }
}
// searchGenres();





// OMDB movie search returns year, genre
function searchMovies() {

    // let queryurl= "http://www.omdbapi.com/?t=good+will+hunting"
    // let apikey= "?apikey=c98f9918"

    $.ajax({
        url:"http://www.omdbapi.com/?t=troy&apikey=c98f9918",
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        console.log(response.Year);
        console.log(response.Genre);
        console.log(response.Genre.split(" "));
        let movieYear = response.Year;
        localStorage.setItem("year", JSON.stringify(movieYear));
        
    })
}
searchMovies(); 
