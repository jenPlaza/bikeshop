/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

//testing
//alert("hello");

let htmlEvents = document.getElementById("id01");
htmlEvents.innerHTML = "Company A";

function filter(evt, category) {

    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
}

var myEvents = new XMLHttpRequest();
myEvents.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myEvents.onload = function () {

    var jsonEvents = JSON.parse(myEvents.responseText);

    secRotate(jsonEvents);
    secEvents2(jsonEvents);
};

function secRotate(dataEvents) {


    htmlEvents += '<section>';
    htmlEvents += '<img src="HikersGuide/design/File_001 (11).png" alt="Alternate Text" />';

    //var rotator = document.getElementById("id02");
    //htmlEvents = '<h2>' + dataEvents.events[4].date + '</h2>';
    //rotator.innerHTML = htmlEvents;

    htmlEvents += '<h2>' + dataEvents.events[4].date + '</h2>';
    htmlEvents += '<h3>' + dataEvents.events[4].location + ' </h3>';

    htmlEvents += '<span>';
    var buttonLeft = document.getElementsByClassName(".left");
    htmlEvents += buttonLeft;
    //htmlEvents += '<input type="button" value="." class="left" onclick="location.href=#;" />';
    htmlEvents += '</span>';
    htmlEvents += '<span>';
    var buttonRight = document.getElementsByClassName(".right");
    htmlEvents += buttonRight;
    //htmlEvents += '<input type="button" value="." class="right" onclick="location.href=#;" />';
    htmlEvents += '</span>';
    htmlEvents += '</section>';


    var articleEvents = document.getElementById("rotatorEvents");
    articleEvents.innerHTML = htmlEvents;
}
function secEvents2(dataEvents2) {

    let htmlEvents2 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_001 (17).png", "/HikersGuide/design/File_001 (16).png",
        "/HikersGuide/design/crystalriver.png", "/HikersGuide/design/photo-1507041957456-9c397ce39c97.jpg", "/HikersGuide/design/File_001 (13).png"];

    for (var i = 0; i < dataEvents2.events.length; i++) {
        htmlEvents2 += '<article>';
        htmlEvents2 += '<img src="' + imageArray[i] + '"';
        htmlEvents2 += 'alt="' + dataEvents2.events[i].subtitle + '"/>';
        htmlEvents2 += '<section>';
        htmlEvents2 += '<h3>' + dataEvents2.events[i].title + '<h3>';
        htmlEvents2 += '<p>' + dataEvents2.events[i].date + '<p>';
        htmlEvents2 += '<p><strong>' + dataEvents2.events[i].location + '<br/ >';
        htmlEvents2 += dataEvents2.events[i].state + '</strong></p>';
        htmlEvents2 += '</section>';
        htmlEvents2 += '</article>';
    }

    htmlEvents2 += '<article>';
    htmlEvents2 += '<img src="' + imageArray[5] + '"';
    htmlEvents2 += 'alt="' + dataEvents2.events[3].subtitle + '"/>';
    htmlEvents2 += '<section>';
    htmlEvents2 += '<h3>' + dataEvents2.events[3].title + '</h3>';
    htmlEvents2 += '<p>' + dataEvents2.events[3].date + '</p>';
    htmlEvents2 += '<p><strong>' + dataEvents2.events[3].location + '<br/ >';
    htmlEvents2 += dataEvents2.events[3].state + '</strong></p>';
    htmlEvents2 += '</section>';
    htmlEvents2 += '</article>';

    htmlEvents2 += '</section>';
    var articleEvents = document.getElementById("Today");
    articleEvents.innerHTML = htmlEvents2;
}
myEvents.send();

