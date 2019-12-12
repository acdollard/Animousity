
    $("#yearBtn").on("click", function(event){
        event.preventDefault();
        searchAnimeYear();
    });

    $("#genreBtn").on("click", function(event){
        event.preventDefault();
        searchAnimeGenre();
    });






function searchAnimeYear()
{
let index = 1
for (let i=1; i<500; i++)
    {

$.ajax({


    url: "https://kitsu.io/api/edge/anime/" + [i],

    method: "GET",
       })
.then(function(response)
        {
// console.log(response);
// console.log(response.data.attributes.startDate.split("-")[0])
           let year = JSON.parse(localStorage.getItem("year"))
           console.log(year)
            if(response.data.attributes.startDate.split("-")[0] === year){
     
    console.log(response.data.attributes.canonicalTitle);
    console.log(response.data.attributes.startDate.split("-")[0]);
    console.log(response.data.attributes.posterImage.original);
    console.log(response.data.attributes.averageRating);
    console.log(response.data.attributes.synopsis);

    let animeName = response.data.attributes.canonicalTitle;
    let animeYear = response.data.attributes.startDate.split("-")[0];
    let animePoster = response.data.attributes.posterImage.original;
    let animeRating = response.data.attributes.averageRating; 
    let animeSynopsis = response.data.attributes.synopsis; 


    $("#card_" + index + "_title").text(animeName);
    $("#card_" + index + "_rating").text("Average Rating: " + animeRating);
    $("#card_" + index + "_synopsis").text(animeSynopsis);
    $("#card_" + index + "_synopsis").css("font-size", "9px");
    $("#card_" + index + "_poster").css("background", "url(" + animePoster + ")")


    index++;
            }
            
        })
    }
}
// searchAnimeYear(); 




// // returns all anime of a given genre *needs work
function searchAnimeGenre()
{
let getGenre = JSON.parse(localStorage.getItem("genre"));
$.ajax({
    url: "https://kitsu.io/api/edge/anime/?filter[genres]=" + getGenre,
    // need sort??
    method: "GET",
       })
.then(function(response)
        {
            let counter = 0;
            for(i=0; i<10; i++)
            {
console.log(response);
console.log(response.data[i].attributes.canonicalTitle);
console.log(response.data[i].attributes.startDate.split("-")[0]);
console.log(response.data[i].attributes.posterImage.original);
console.log(response.data[i].attributes.averageRating);
console.log(response.data[i].attributes.synopsis);

let animeName = response.data[i].attributes.canonicalTitle;
let animeYear = response.data[i].attributes.startDate.split("-")[0];
let animePoster = response.data[i].attributes.posterImage.original;
// let animeRating = response.data.attributes.averageRating; 
let animeSynopsis = response.data[i].attributes.synopsis; 


$("#card_" + counter + "_title").text(animeName);
$("#card_" + counter + "_rating").text("Year: " + animeYear);
$("#card_" + counter + "_synopsis").text(animeSynopsis);
$("#card_" + counter + "_synopsis").css("font-size", "9px");
$("#card_" + counter + "_poster").css("background", "url(" + animePoster + ")");

counter++;
               }


        })
    
    
}
// searchAnimeGenre(); 





// // returns the GENRE DATA of animes from 1-setNumber
// function searchGenres()
// {

//     for(let i=1; i<10; i++ )
//     {
//         $.ajax({
//             url: "https://kitsu.io/api/edge/anime/" + [i] + "/genres",
//             method: "GET"
//         })
//         .then(function(response)
//             {
//             let array = response.data
//             for (i=0; i<array.length; i++){
//                 console.log(array[i].attributes.name);
//                 console.log(i);
    
//             }
        
//             })
//     }
// }
// // searchGenres();





// OMDB movie search returns year, genre
// function searchMovies() {
    //     let queryurl= "http://www.omdbapi.com/?t=good+will+hunting"
    // let apikey= "?apikey=c98f9918"


    $("#searchBtn").on("click", function(event){
        event.preventDefault();
        let searchTerm = $("#findtext").val().trim();
        console.log(searchTerm);
        


        $.ajax({
            url:"https://www.omdbapi.com/?t=" + searchTerm + "&apikey=c98f9918",
            method: "GET"
        })
        .then(function(response){
            // console.log(response);
            // console.log(response.Year);
            // console.log(response.Genre);
            // console.log(response.Poster);
            // console.log(response.Title);
            // console.log(response.Genre.split(" ")[0].replace(",",""));
            let movieTitle = $("<p>").text( "Title: " + response.Title)
            let movieGenre = $("<p>").text( "Genre: " + response.Genre.split(" ")[0].replace(",",""));
            let local_storage_genre = response.Genre.split(" ")[0].replace(",","");
            let movieYear = $("<p>").text( "Released: " + response.Year);
            let local_storage_year = response.Year
            let moviePlot = $("<p>").text( "Plot: " + response.Plot);
            let moviePoster = $("<img>").attr("src", response.Poster);
            // console.log(response.Year);
            localStorage.setItem("genre", JSON.stringify(local_storage_genre));
            localStorage.setItem("year", JSON.stringify(local_storage_year));
            localStorage.setItem("plot", JSON.stringify(moviePlot));
            localStorage.setItem("title", JSON.stringify(movieTitle));
            localStorage.setItem("poster", JSON.stringify(moviePoster));
            
            console.log(local_storage_genre);

            $("#movie-title").empty();
            $("#movie-title").append(movieTitle, movieGenre, movieYear, moviePlot);

            

            $("#movie-title").html(movieTitle);
            $("#movie-year").html(movieYear);
            $("#movie-genre").html(movieGenre);
            $("#movie-synopsis").html(moviePlot);

            $("#posterHolder").attr("src", response.Poster);
            // $("#posterHolder").height(300);
            // $("#posterHolder").width(auto);


            

        })
        // searchAnimeYear();
    });


        

