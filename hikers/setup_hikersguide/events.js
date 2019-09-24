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
    secToday(jsonEvents);
    secWeekend(jsonEvents);
    secThisMonth(jsonEvents);
};

function secRotate(dataEvents) {
    
    htmlEvents += '<img src="HikersGuide/design/File_001 (11).png" alt="Alternate Text" />';

    htmlEvents += '<h2>' + dataEvents.events[4].date + '</h2>';
    htmlEvents += '<h3>' + dataEvents.events[4].location + ' </h3>';

    htmlEvents += '<span>';
    htmlEvents += '<button class=left onclick=location.href="#">.</button>';
    htmlEvents += '</span>';
    htmlEvents += '<span>';
    htmlEvents += '<button class=right onclick=location.href="#">.</button>';
    htmlEvents += '</span>';

    var articleEvents = document.getElementById("rotatorEvents");
    articleEvents.innerHTML = htmlEvents;
}
function secToday(dataEvents2) {

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
function secWeekend(dataEvents3) {

    let htmlEvents3 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_001 (17).png", "/HikersGuide/design/File_001 (14).png",
        "/HikersGuide/design/File_001 (5).png", "/HikersGuide/design/File_001 (15).png", "/HikersGuide/design/File_001 (13).png"];

    for (var i = 2; i < dataEvents3.events.length; i++) {
        htmlEvents3 += '<article>';
        htmlEvents3 += '<img src="' + imageArray[i] + '"';
        htmlEvents3 += 'alt="' + dataEvents3.events[i].subtitle + '"/>';
        htmlEvents3 += '<section>';
        htmlEvents3 += '<h3>' + dataEvents3.events[i].title + '</h3>';
        htmlEvents3 += '<p>' + dataEvents3.events[i].date + '</p>';
        htmlEvents3 += '<p><strong>' + dataEvents3.events[i].location + '<br/ >';
        htmlEvents3 += dataEvents3.events[i].state + '</strong></p>';
        htmlEvents3 += '</section>';
        htmlEvents3 += '</article>';
    }

    htmlEvents3 += '</section>';
    var articleEvents = document.getElementById("Weekend");
    articleEvents.innerHTML = htmlEvents3;
}
function secThisMonth(dataEvents4) {

    let htmlEvents4 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_001 (17).png", "/HikersGuide/design/File_001 (16).png",
        "/HikersGuide/design/File_001 (12).png", "/HikersGuide/design//File_001 (18).png", "/HikersGuide/design/File_001 (19).png"];

    for (var i = 3; i < dataEvents4.events.length; i++) {
        htmlEvents4 += '<article>';
        htmlEvents4 += '<img src="' + imageArray[i] + '"';
        htmlEvents4 += 'alt="' + dataEvents4.events[i].subtitle + '"/>';
        htmlEvents4 += '<section>';
        htmlEvents4 += '<h3>' + dataEvents4.events[i].title + '</h3>';
        htmlEvents4 += '<p>' + dataEvents4.events[i].date + '</p>';
        htmlEvents4 += '<p><strong>' + dataEvents4.events[i].location + '<br/ >';
        htmlEvents4 += dataEvents4.events[i].state + '</strong></p>';
        htmlEvents4 += '</section>';
        htmlEvents4 += '</article>';
    }

    htmlEvents4 += '</section>';
    var articleEvents = document.getElementById("ThisMonth");
    articleEvents.innerHTML = htmlEvents4;
}
myEvents.send();

