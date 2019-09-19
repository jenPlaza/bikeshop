//testing
//alert("hello");

var htmlHome = document.getElementById("id01");
htmlHome.innerHTML = "Company A";

var myHome = new XMLHttpRequest();
myHome.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myHome.onload = function () {

    var jsonHome = JSON.parse(myHome.responseText);
    secEvents(jsonHome);
    secMiscMem(jsonHome);
    secMiscMEvents(jsonHome);
    secMiscAbout(jsonHome);
};

function secEvents(dataHome) {

    htmlHome += '<section>';
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
    
    var articleBlog = document.getElementById("events");
    articleBlog.innerHTML = htmlHome;
}

function secMiscMem(dataHomeMembers) {

    var htmlHome2 = "";

    htmlHome2 += '<section>';

    for (var i = 0; i < dataHomeMembers.hikers.length; i++) {

    htmlHome2 += '<img src="' + dataHomeMembers.hikers[i].imageURL + '"';

    htmlHome2 += 'alt="' + dataHomeMembers.hikers[i].subtitle + '"/>';

    htmlHome2 += '<p><strong>' + dataHomeMembers.hikers[i].firstname + " " + dataHomeMembers.hikers[i].lastname + '</strong>';

    htmlHome2 += '<br/ >  A member since ' + dataHomeMembers.hikers[0].joinDate + '. A member from' + dataHomeMembers.hikers[i].city + ", " + dataHomeMembers.hikers[i].state +".";
    htmlHome2 += '</p>';
    }
    htmlHome2 += '</section>';

    var articleBlog = document.getElementById("members");
    articleBlog.innerHTML = htmlHome2;
}

function secMiscMEvents(dataHomeMEvents) {

    var htmlHome3 = "";

    htmlHome3 += '<section>';

    for (i = 0; i < dataHomeMEvents.events.length; i++) {
            htmlHome3 += '<img src="/HikersGuide/design/calendar-2.png" alt="Alternate Text" />';
        htmlHome3 += '<p><strong>' + dataHomeMEvents.events[i].title + '</strong>';
        htmlHome3 += '<br/ >' + dataHomeMEvents.events[i].state + '</p>';
        }
    htmlHome3 += '</section>';

    var articleBlog = document.getElementById("mEvents");
    articleBlog.innerHTML = htmlHome3;
}

function secMiscAbout(dataHomeAbout) {

    var htmlHome4 = "";

    htmlHome4 += '<section>';
    htmlHome4 += '<h3>About</h3>';
    htmlHome4 += '<p><strong>' + dataHomeAbout.about.title + '</strong></p>';
    htmlHome4 += '<p>' + dataHomeAbout.about.text + '</p>';
    htmlHome4 += '</section>';

    var articleBlog = document.getElementById("about");
    articleBlog.innerHTML = htmlHome4;
}

myHome.send();