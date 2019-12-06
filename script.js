function searchMovieYear()
{

for (let i=1; i<50; i++)
    {

$.ajax({
    url: "" + [i],
    method: "GET",
       })
.then(function(response)
        {
// console.log(response);
            if(response.data.attributes.startDate.split("-")[0] == 1996){
     
    console.log(response.data.attributes.);
    
            }
            
        })
    }
}
searchMovieYear();