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

myEvents.onload = function () {

    var jsonEvents = JSON.parse(myEvents.responseText);

    //Testing
    //console.log(jsonData.events[0]);//works
    //console.log(jsonData.events[0].title);//works

    secRotate(jsonEvents);

};

function secRotate(dataEvents) {
    htmlEvents += '<section>';
    htmlEvents += '<h1><strong>' + dataEvents.events[4].title + '</strong></h1>';
    htmlEvents += '<h1><strong>' + dataEvents.events[4].date + '</strong></h1>';
    htmlEvents += '<h1><strong>' + dataEvents.events[4].location + ' </strong></h1>';

    htmlEvents += '<section>';
    htmlEvents += '<input type="button" value="." class="left" onclick="location.href=#;" />';
    htmlEvents += '</section>';
    htmlEvents += '<span>';
    htmlEvents += '<input type="button" value="." class="right" onclick="location.href=#;" />';
    htmlEvents += '</span>';
    htmlEvents += '</section>';


    var articleEvents = document.getElementById("rotator");
    articleEvents.innerHTML = htmlEvents;
}
myEvents.send();

var myEvents2 = new XMLHttpRequest();
myEvents2.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myEvents2.onload = function () {

    var jsonEvents2 = JSON.parse(myEvents2.responseText);

    //Testing
    //console.log(jsonData.events[0]);//works
    //console.log(jsonData.events[0].title);//works

    secEvents2(jsonEvents2);

};

function secEvents2(dataEvents2) {

    let htmlEvents2 = "";

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/smokyriver.png", "/HikersGuide/design/tree.png",
        "/HikersGuide/design/crystalriver.png", "/HikersGuide/design/photo-1507041957456-9c397ce39c97.jpg"];
    htmlEvents2 += '<section>';
    htmlEvents2 += '<dl>';
    htmlEvents2 += '<dt><strong><a href="#">Today</a></strong></dt>';
    htmlEvents2 += '<dd></dd>';
    htmlEvents2 += '<dt><strong><a href="#">Weekend</a></strong></dt>';
    htmlEvents2 += '<dd></dd>';
    htmlEvents2 += '<dt><strong><a href="#">This Month</a></strong></dt>';
    htmlEvents2 += '<dd></dd>';
    htmlEvents2 += '</dl>';
    htmlEvents2 += '<br /> <br /> <br />';
    htmlEvents2 += '<h2>Today</h2>';

    for (var i = 0; i < dataEvents2.events.length; i++) {
        htmlEvents2 += '<article>';

        htmlEvents2 += '<img src="' + imageArray[i] + '"';
        htmlEvents2 += 'alt="' + dataEvents2.events[i].subtitle + '"/>';

        htmlEvents2 += '<h3><strong>' + dataEvents2.events[i].title + '</strong></p>';

        htmlEvents2 += '<p><strong>' + dataEvents2.events[i].date + '</strong></p>';
        
        htmlEvents2 += '<br/>';
        htmlEvents2 += '<p>' + dataEvents2.events[i].text + '</p>';
        htmlEvents2 += '</article>';
        htmlEvents2 += '</section>';
    }

    var articleEvents = document.getElementById("events");
    articleEvents.innerHTML = htmlEvents2;
}
myEvents2.send();
