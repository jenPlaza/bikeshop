function filter(evt, category) {

    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for ( i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
}


var myEvents = new XMLHttpRequest();
myEvents.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');


myEvents.onload = function category() {

    var jsonEvents = JSON.parse(myEvents.responseText);

    secEvents2(jsonEvents);
};

function secEvents2(dataEvents2) {

    let htmlEvents2 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_001 (17).png", "/HikersGuide/design/File_001 (16).png",
        "/HikersGuide/design/crystalriver.png", "/HikersGuide/design/photo-1507041957456-9c397ce39c97.jpg", "/HikersGuide/design/File_001 (13).png"];
    

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