
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

// TYPEWRITER FOR NAME
// set up text to print, each item in array is new line
// var aText = new Array
//     (
//     "Jane Lim Enqi"
//     );
//     var iSpeed = 100; // time delay of print out
//     var iIndex = 0; // start printing array at this posision
//     var iArrLength = aText[0].length; // the length of the text array
//     var iScrollAt = 20; // start scrolling up at this many lines
     
//     var iTextPos = 0; // initialise text position
//     var sContents = ''; // initialise contents variable
//     var iRow; // initialise current row
     
//     function typeWriter()
//     {
//      sContents =  ' ';
//      iRow = Math.max(0, iIndex-iScrollAt);
//      var destination = document.getElementById("name");
     
//      while ( iRow < iIndex ) {
//       sContents += aText[iRow++] + '<br />';
//      }
//      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//      if ( iTextPos++ == iArrLength ) {
//       iTextPos = 0;
//       iIndex++;
//       if ( iIndex != aText.length ) {
//        iArrLength = aText[iIndex].length;
//        setTimeout("typeWriter()", 600);
//       }
//      } else {
//       setTimeout("typeWriter()", iSpeed);
//      }
//     }
    
//     // typeWriter();