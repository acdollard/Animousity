function searchAnime()
{

for (let i=1; i<21; i++)
    {

$.ajax({
    url: "https://kitsu.io/api/edge/anime/" +[i],
    method: "GET",
       })
.then(function(response)
        {
    console.log(response.data.attributes.canonicalTitle);
    console.log(response.data.attributes.startDate.split("-")[0]);
    console.log(response.data.attributes.posterImage.original);
    console.log(response.data.attributes.averageRating)
        })
    }
}



searchAnime(); 