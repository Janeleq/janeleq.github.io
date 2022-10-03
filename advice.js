function getAdvice()
{
    console.log("===[START] getAdvice() ===")
    api_url_endpoint = "https://api.adviceslip.com/advice"

    
    axios.get(api_url_endpoint).then(response =>
        {
          advice = response.data.slip.advice;
          document.getElementById("advice").innerHTML = advice;
        })

    .catch(error =>
        {
            console.log(error.message)
        })
    console.log("===[END] getAdvice() ===")

}