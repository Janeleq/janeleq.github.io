function getAdvice()
{
    console.log("===[START] getAdvice() ===")
    let advice = document.getElementById("advice").innerHTML;
    api_url_endpoint = "https://api.adviceslip.com/advice"

    
    axios.get(api_url_endpoint).then(response =>
        {
          console.log(response.data);
        })

    .catch(error =>
        {
            console.log(error.message)
        })
    console.log("===[END] getAdvice() ===")

}