/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

//testing
//alert("hello");
var myEvents = new XMLHttpRequest();
myEvents.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

let htmlEvents = document.getElementById("id01");
htmlEvents.innerHTML = "Company A";

window.onload = function () {

    var jsonEvents = JSON.parse(myEvents.responseText);

    //Testing
    //console.log(jsonData.events[0]);//works
    //console.log(jsonData.events[0].title);//works

    divALevel3(jsonEvents);

};

function divALevel3(dataEvents) {
    //Testing
    //console.log(data.events.length);//works

    for (var i = 0; i < data.events.length; i++) {
        htmlEvents += '<article>';
        htmlEvents += '<img src="' + data.events[i].imageURL + '"';
        htmlEvents += 'alt="' + data.events[i].sponsor + '"/>';

        htmlEvents += '<p><strong>' + data.events[i].subtitle + '</strong></p>';

        htmlEvents += '<h3>' + data.events[i].title + '</h3>';
        htmlEvents += '<p>' + data.events[i].text + '</p>';

        htmlContent += '</article>';
    }

    var articleEvents = document.getElementById("events");
    articleEvents.innerHTML = htmlEvents;
}
myEvents.send();
