function searchAnime(){
debugger;

// let URL = "https://hummingbirdv1.p.rapidapi.com/anime/"; 
// let anime = "naturo";
// let APIkey = "/c74f9e0b83msha04f21a2b6af07dp1b3884jsn61255a0396bf"; 

$.ajax({

    URL: "https://kitsu.io/api/edge/anime?filter[genres]=adventure",
    method: "GET",
    
}).then(function(response){
    console.log(response)
})
}


searchAnime(); 