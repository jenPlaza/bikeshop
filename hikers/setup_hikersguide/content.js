/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

var myJsonRequest1 = new XMLHttpRequest();
myJsonRequest1.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myJsonRequest1.onload = function () {

    var request = JSON.parse(myJsonRequest1.responseText);

    secEvents(request);
    secJoin(request);
    secMiscMem(request);
    secMiscMEvents(request);
    secMiscAbout(request);
};
myJsonRequest1.send();

var myJsonRequest2 = new XMLHttpRequest();
myJsonRequest2.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myJsonRequest2.onload = function () {

    var request = JSON.parse(myJsonRequest2.responseText);

    secALevel1(request);
    secALevel2(request);
    secALevel3(request);
    secALevel4(request);
};
myJsonRequest2.send();

var myJsonRequest3 = new XMLHttpRequest();
myJsonRequest3.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myJsonRequest3.onload = function () {
    var request = JSON.parse(myJsonRequest3.responseText);

    secRotate(request);
    secToday(request);
    secWeekend(request);
    secThisMonth(request);
};
myJsonRequest3.send();

//index page
function secEvents(dataHome) {

    var htmlHome = '<section>';

     htmlHome += '<h2>Recent Posts</h2>';

    for (var i = 0; i < dataHome.posts.length; i++) {
        htmlHome += '<article>';
        htmlHome += '<img src="' + dataHome.posts[i].imageURL + '"';
        htmlHome += 'alt="' + dataHome.posts[i].subtitle + '"/>';
        htmlHome += '<h3>' + dataHome.posts[i].title + '</h3>';
        htmlHome += '<p><strong>' + dataHome.posts[i].subtitle + '</strong></p>';
        htmlHome += '<dl>';
        htmlHome += '<dt></dt>';
        htmlHome += '<dd>by ' + dataHome.posts[i].author + '</dd>';
        htmlHome += '<dt></dt>';
        htmlHome += '<dd>' + dataHome.posts[i].postDate + '</dd>';
        htmlHome += '<dt></dt>';
        htmlHome += '<dd>' + dataHome.posts[i].moreLink + '</dd>';
        htmlHome += '</dl>';

        htmlHome += '</article>';
    }

    htmlHome += '</section>';
    var articleBlog = document.getElementById("posts");
    articleBlog.innerHTML = htmlHome;
}
function secJoin(dataHomeJoin) {
    var htmlHome2 = '';

    htmlHome2 += '<img src="/HikersGuide/images/climbers.png" alt="Alternate Text" />';
    htmlHome2 += '<section>';
    htmlHome2 += '<h2>JOIN THE ADVENTURE</h2>';
    htmlHome2 += '<h4>' + dataHomeJoin.locations[4].title + '</h4>';
    htmlHome2 += '<p>' + dataHomeJoin.locations[4].text + ' </p>';
    htmlHome2 += '<p>' + dataHomeJoin.locations[4].city + ' | ' + dataHomeJoin.locations[4].state + ' </p>';
    htmlHome2 += '</section>';

    var articleEvents = document.getElementById("join");
    articleEvents.innerHTML = htmlHome2;
}
function secMiscMem(dataHomeMembers) {

    var htmlHome3 = '<section>';
    htmlHome3 += '<h3>Upcoming Events</h3>';
    for (var i = 0; i < dataHomeMembers.events.length; i++) {
        htmlHome3 += '<img src="/HikersGuide/design/calendar-2.png" alt="Alternate Text" />';
        htmlHome3 += '<p><strong>' + dataHomeMembers.events[i].title + '</strong></p>';
        htmlHome3 += '<p>' + dataHomeMembers.events[i].text + '</p>';
    }
    htmlHome3 += '</section>';

    var articleBlog = document.getElementById("mEvents");
    articleBlog.innerHTML = htmlHome3;
}
function secMiscMEvents(dataHomeMEvents) {

    var htmlHome4 = '<section>';
    htmlHome4 += '<h3>New Hikers</h3>';
    for (var i = 0; i < dataHomeMEvents.hikers.length; i++) {
        htmlHome4 += '<img src="' + dataHomeMEvents.hikers[i].imageURL + '"';
        htmlHome4 += 'alt="' + dataHomeMEvents.hikers[i].subtitle + '"/>';

        htmlHome4 += '<p><strong>' + dataHomeMEvents.hikers[i].firstname + " " + dataHomeMEvents.hikers[i].lastname + '</strong></p>';
        htmlHome4 += '<p>' + dataHomeMEvents.hikers[i].city + ", " + dataHomeMEvents.hikers[i].state + '</p>';
    }
    htmlHome4 += '</section>';

    var articleBlog = document.getElementById("members");
    articleBlog.innerHTML = htmlHome4;
}
function secMiscAbout(dataHomeAbout) {

    var htmlHome5 = '';

    htmlHome5 += '<section>';
    htmlHome5 += '<h3>About</h3>';
    htmlHome5 += '<p><strong>' + dataHomeAbout.about.title + '</strong></p>';
    htmlHome5 += '<p>' + dataHomeAbout.about.text + '</p>';
    htmlHome5 += '</section>';

    var articleBlog = document.getElementById("about");
    articleBlog.innerHTML = htmlHome5;
}

//blog page
function secALevel1(data1) {
    //var article = document.getElementsByTagName("h3");
    //var htmlBlog = '<h3>';
    //article.innerHTML = htmlBlog;

    var htmlBlog = "";

    var imageArray = ["/HikersGuide/design/File_005.png", "/HikersGuide/design/File_010.png", "/HikersGuide/design/File_015.png", "/HikersGuide/design/File_012.png", "/HikersGuide/design/File_013.png", "/HikersGuide/design/File_014.png", "/HikersGuide/design/File_018.png"];

    for (var i = 0; i < data1.locations.length; i++) {
        htmlBlog += '<article>';
        htmlBlog += '<img src="' + imageArray[i] + '"';
        htmlBlog += 'alt="' + data1.locations[i].title + '"/>';
        htmlBlog += '<h3>' + data1.locations[i].title + '</h3>';
        htmlBlog += '<p>' + data1.locations[i].text + '</p>';
        htmlBlog += '<dl>';
        htmlBlog += '<dd></dd>';
        htmlBlog += '<dt>by ' + data1.posts[i].author + '</dt>';
        htmlBlog += '<dd></dd>';
        htmlBlog += '<dt>' + data1.posts[i].postDate + '</dt>';
        htmlBlog += '<dd></dd>';
        htmlBlog += '<dt>' + data1.posts[i].moreLink + '</dt>';
        htmlBlog += '<span';
        htmlBlog += '<input type="button" value="View More" class="seeMore" onclick="location.href=#" />';
        htmlBlog += '</span>';
        htmlBlog += '</article>';
    }

    htmlBlog += '<article>';
    htmlBlog += '<img src="' + imageArray[i] + '"';
    htmlBlog += 'alt="' + data1.locations[0].title + '"/>';
    htmlBlog += '<h3>' + data1.locations[0].title + '</h3>';
    htmlBlog += '<p>' + data1.locations[0].text + '</p>';
    htmlBlog += '<dl>';
    htmlBlog += '<dd></dd>';
    htmlBlog += '<dt>by ' + data1.posts[0].author + '</dt>';
    htmlBlog += '<dd></dd>';
    htmlBlog += '<dt>' + data1.posts[0].postDate + '</dt>';
    htmlBlog += '<dd></dd>';
    htmlBlog += '<dt>' + data1.posts[0].moreLink + '</dt>';
    htmlBlog += '</dl>';
    htmlBlog += '<input type="button" value="View More" class="seeMore" onclick="location.href=#" />';
    htmlBlog += '</span>';
    htmlBlog += '</article>';

    htmlBlog += '<article>';
    htmlBlog += '<img src="' + imageArray[i] + '"';
    htmlBlog += 'alt="' + data1.locations[3].title + '"/>';
    htmlBlog += '<h3>' + data1.locations[3].title + '</h3>';
    htmlBlog += '<p>' + data1.locations[3].text + '</p>';
    htmlBlog += '<dl>';
    htmlBlog += '<dd></dd>';
    htmlBlog += '<dt>by ' + data1.posts[3].author + '</dt>';
    htmlBlog += '<dd></dd>';
    htmlBlog += '<dt>' + data1.posts[3].postDate + '</dt>';
    htmlBlog += '<dd></dd>';
    htmlBlog += '<dt>' + data1.posts[3].moreLink + '</dt>';
    htmlBlog += '</dl>';
    htmlBlog += '<input type="button" value="View More" class="seeMore" onclick="location.href=#" />';
    htmlBlog += '</span>';
    htmlBlog += '</article>';

    var articleBlog = document.getElementById("aLevel1");
    articleBlog.innerHTML = htmlBlog;
}
function secALevel2(data2) {
    var htmlArticle2 = '';

   for (var i = 0; i < data2.posts.length; i++) {
       htmlArticle2 += '<article>';
       htmlArticle2 += '<img src="' + data2.posts[i].imageURL + '"';
       htmlArticle2 += 'alt="' + data2.posts[i].subtitle + '"/>';
      
       htmlArticle2 += '<p>' + data2.posts[i].subtitle + '</p>';

       htmlArticle2 += '<h3>' + data2.posts[i].title + '</h3>';
    
       htmlArticle2 += '<dl>';
       htmlArticle2 += '<dt>by ' + data2.posts[i].author + '</dt>';
       htmlArticle2 += '<dt>' + data2.posts[i].postDate + '</dt>';
       htmlArticle2 += '<dt>' + data2.posts[i].moreLink + '</dt>';
       htmlArticle2 += '</dl>';
       htmlArticle2 += '</article>';
    }

    var articleBlog = document.getElementById("aLevel2");
    articleBlog.innerHTML = htmlArticle2;
}
function secALevel3(data3) {
    var htmlArticle3 = '<section>';

    htmlArticle3 += '<img src="/HikersGuide/design/white.jpg" alt="Alternate Text" />';
    htmlArticle3 += '<section>';
        htmlArticle3 += '<p><strong>' + data3.locations[0].title + '</strong></p>';
    htmlArticle3 += '<h3>' + data3.locations[0].text + '</h3>';
    htmlArticle3 += '</section>';
        htmlArticle3 += '<dl>';
    htmlArticle3 += '<dt><strong>by ' + data3.posts[0].author + '</strong></dt>';
    htmlArticle3 += '<dt><strong>' + data3.posts[0].postDate + '</strong></dt>';
    htmlArticle3 += '<dt><strong>' + data3.posts[0].moreLink + '</strong></dt>';
        htmlArticle3 += '</dl>';
        htmlArticle3 += '</section>';


        htmlArticle3 += '<article>';
        htmlArticle3 += '<img src="/HikersGuide/design/File_001.png" alt="Alternate Text" />';
    htmlArticle3 += '<article>';
        htmlArticle3 += '<p><strong>' + data3.posts[1].title + '</strong></p>';

    htmlArticle3 += '<h3>' + data3.posts[1].subtitle + '</h3>';
    htmlArticle3 += '<p>' + data3.posts[1].text + '</p>';
    htmlArticle3 += '</article>';
        htmlArticle3 += '<dl>';
        htmlArticle3 += '<dt>by ' + data3.posts[1].author + '</dt>';
        htmlArticle3 += '<dt>' + data3.posts[1].postDate + '</dt>';
        htmlArticle3 += '<dt>' + data3.posts[1].moreLink + '</dt>';
        htmlArticle3 += '</dl>';
        htmlArticle3 += '</article>';


    var articleBlog = document.getElementById("aLevel3");
    articleBlog.innerHTML = htmlArticle3;
}
function secALevel4(data4) {
    var htmlArticle4 = '';

        htmlArticle4 += '<article>';
    htmlArticle4 += '<img src="/HikersGuide/design/forest-grass-lawn-1826.jpg" alt="Alternate Text" />';
    htmlArticle4 += '<article>';
        htmlArticle4 += '<p><strong>' + data4.locations[2].title + '</strong></p>';
    htmlArticle4 += '<h3>' + data4.locations[2].text + '</h3>';
    htmlArticle4 += '<p>' + data4.posts[1].text + '</p>';
    htmlArticle4 += '</article>';

    htmlArticle4 += '</article>';


    htmlArticle4 += '<article>';
    htmlArticle4 += '<img src="/HikersGuide/design/fall-background-photo.jpg" alt="Alternate Text" />';
    htmlArticle4 += '<article>';
    htmlArticle4 += '<p><strong>' + data4.locations[3].title + '</strong></p>';
    htmlArticle4 += '<h3>' + data4.locations[3].text + '</h3>';
    htmlArticle4 += '<p>' + data4.posts[1].text + '</p>';
    htmlArticle4 += '</article>';

    htmlArticle4 += '</article>';


    htmlArticle4 += '<section>';
    htmlArticle4 += '<section>';
    htmlArticle4 += '<h3>' + data4.locations[4].title + '</h3>';
    htmlArticle4 += '<p>' + data4.locations[4].text + '</p>';
    htmlArticle4 += '<p>' + data4.locations[4].city + ' | ' + data4.locations[4].state+'</p>';
    htmlArticle4 += '</section>';
    htmlArticle4 += '</section>';


    var articleBlog = document.getElementById("aLevel4");
    articleBlog.innerHTML = htmlArticle4;
}

//events page
function secRotate(dataEvents) {
    var htmlEvents = '';

    htmlEvents += '<section>';
    htmlEvents += '<img src="HikersGuide/design/File_011.png" alt="Alternate Text" />';

    htmlEvents += '<h1>' + dataEvents.events[4].date + '</h1>';
    htmlEvents += '<h5>' + dataEvents.events[4].location + ' </h5>';

    htmlEvents += '<span>';
    htmlEvents += '<button class=left onclick=location.href="#">.</button>';
    htmlEvents += '</span>';
    htmlEvents += '<span>';
    htmlEvents += '<button class=right onclick=location.href="#">.</button>';
    htmlEvents += '</span>';
    htmlEvents += '</section>';

    var articleEvents = document.getElementById("rotatorEvents");
    articleEvents.innerHTML = htmlEvents;
}
function secToday(dataEvents2) {

    var htmlEvents2 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_017.png", "/HikersGuide/design/File_016.png",
        "/HikersGuide/design/crystalriver.png", "/HikersGuide/design/photo-1507041957456-9c397ce39c97.jpg", "/HikersGuide/design/File_013.png"];

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

    var htmlEvents3 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_017.png", "/HikersGuide/design/File_014.png",
        "/HikersGuide/design/File_005.png", "/HikersGuide/design/File_015.png", "/HikersGuide/design/File_013.png"];

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

    var htmlEvents4 = '<section>';

    var imageArray = ["/HikersGuide/design/sunnytrees.png", "/HikersGuide/design/File_017.png", "/HikersGuide/design/File_016.png",
        "/HikersGuide/design/File_012.png", "/HikersGuide/design//File_018.png", "/HikersGuide/design/File_019.png"];

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
