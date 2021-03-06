

// returns all animes from 1-setNumber made in a given year


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
    $("#card_" + index + "_synopsis").css("font-size", "10px");
    $("#card_" + index + "_poster").css("background", "url(" + animePoster + ")")


    index++;
            }
            
        })
    }
}
// searchAnimeYear(); 




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

            let movieTitle = $("<p>").text( " " + response.Title)
            let movieGenre = $("<p>").text( "Genre: " + response.Genre.split(" ")[0].replace(",",""));
            let movieYear = $("<p>").text( "Released: " + response.Year);
            let local_storage_year = response.Year
            let moviePlot = $("<p>").text( " " + response.Plot);

            let moviePoster = $("<img>").attr("src", response.Poster);
            // console.log(response.Year);
            localStorage.setItem("genre", JSON.stringify(movieGenre));
            localStorage.setItem("year", JSON.stringify(local_storage_year));
            localStorage.setItem("plot", JSON.stringify(moviePlot));
            localStorage.setItem("title", JSON.stringify(movieTitle));
            localStorage.setItem("poster", JSON.stringify(moviePoster));
            

            $("#movie-title").empty();
            $("#movie-title").append(movieTitle, movieGenre, movieYear, moviePlot);

            

            $("#movie-title").html(movieTitle);
            $("#movie-year").html(movieYear);
            $("#movie-genre").html(movieGenre);
            $("#movie-synopsis").html(moviePlot);

            $("#posterHolder").attr("src", response.Poster);


            

        })
        searchAnimeYear();
    });


        

    var app2 = new Vue({
        el: '#app',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      })