var service = require('*/cartridge/controllers/omdb11');

    function fun () {

    // var properties = {};
    
    var search = document.getElementbyId("search").value;
    console.log(search);

    // var url = service.omdbapiJSON.getURL();
    // var posturl = '?i=tt3896198&apikey=9abfc6d4';
    // // var posturl = '?i=tt3896198&apikey=9abfc6d4&s='+search;

    // service.omdbapiJSON.setURL(url+posturl);
    // var svcResult = service.omdbapiJSON.call();
    // properties.data = svcResult.object;

    
        var xhttp;
        if (search == "") {
          document.getElementById("search").innerHTML = "";
          return;
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          document.getElementById("search").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "http://www.omdbapi.com/?i=tt3896198&apikey=9abfc6d4&s="+search, true);
        xhttp.send();
      
// }




// <div class="col-md-4">
//                 <div id="Poster" class="container"><img class="image" src="${JSON.parse(pdict.data).Poster}"/></div>
//             </div>



//                     <table class="table">
//                         <tbody>
//                             <tr><td id="Title" data-toggle="modal" data-target="#myModal">${JSON.parse(pdict.data).Title}</td></tr>
//                             <tr><td id="Year">${JSON.parse(pdict.data).Year}</td></tr>
//                             <tr><td id="Genre">${JSON.parse(pdict.data).Genre}</td></tr>
//                         </tbody>
//                     </table>




// <div class="modal fade right" id="myModal" role="dialog">
//             <div class="modal-dialog modal-lg">
//                 <div class="modal-content" style="background:cyan ; color:black;">
//                     <div class="modal-header">
//                         <button type="button" class="close" data-dismiss="modal">X</button>
//                     </div>
//                     <div class="modal-body">
//                         <div class="container">
//                             <table class="table" style="color: currentcolor;">
//                                 <tbody>
//                                   <tr><td id="Title2">${JSON.parse(pdict.data).Title}</td></tr>
//                                   <tr><td id="Year2">${JSON.parse(pdict.data).Year}</td></tr>
//                                   <tr><td id="Genre2">${JSON.parse(pdict.data).Genre}</td></tr>
//                                   <tr><td id="imdbRating">${JSON.parse(pdict.data).imdbRating}</td></tr>
//                                   <tr><td id="Released">${JSON.parse(pdict.data).Released}</td></tr>
//                                   <tr><td id="Runtime">${JSON.parse(pdict.data).Runtime}</td></tr>
//                                   <tr><td id="Director">${JSON.parse(pdict.data).Director}</td></tr>
//                                   <tr><td id="Actors">${JSON.parse(pdict.data).Actors}</td></tr>
//                                   <tr><td id="BoxOffice">${JSON.parse(pdict.data).BoxOffice}</td></tr>
//                                   <tr><td id="Plot">${JSON.parse(pdict.data).Plot}</td></tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
    