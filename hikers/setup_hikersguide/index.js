//testing
//alert("hello");

var htmlHome = document.getElementById("id01");
htmlHome.innerHTML = "Company A";

var myHome = new XMLHttpRequest();
myHome.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myHome.onload = function () {

    var jsonHome = JSON.parse(myHome.responseText);
    secEvents(jsonHome);
};

function secEvents(dataHome) {

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

    htmlHome += '<div>';
    htmlHome += '<input type="button" value="View More" class="button" onclick="location.href=#;" />';
    htmlHome += '</div>';

    var articleBlog = document.getElementById("events");
    articleBlog.innerHTML = htmlHome;
}
myHome.send();


var myHome2 = new XMLHttpRequest();
myHome2.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myHome2.onload = function () {

    var jsonHome2 = JSON.parse(myHome2.responseText);
    secMisc(jsonHome2);
};

function secMisc(dataHome2) {

    var htmlHome2 = "";

    htmlHome2 += '<aside>';
    htmlHome2 += '<h3>About</h3>';
    htmlHome2 += '<p><strong>' + dataHome2.about.title + '</strong></p>';
    htmlHome2 += '<p>' + dataHome2.about.text + '</p>';
    htmlHome2 += '</aside>';

    //htmlHome2 += '</section>';
    htmlHome2 += '<Table id="misc">';
    for (var i = 0; i < dataHome2.hikers.length; i++) {


        htmlHome2 += '<tr>';
        htmlHome2 += '<td>';
        htmlHome2 += '<section>';
        htmlHome2 += '<img src="' + dataHome2.hikers[i].imageURL + '"';
        htmlHome2 += 'alt="' + dataHome2.hikers[i].subtitle + '"/>';
        htmlHome2 += '<h3>' + dataHome2.hikers[0].firstname + " " + dataHome2.hikers[i].firstname + '</h3>';
        htmlHome2 += '<p>  A member since ' + dataHome2.hikers[i].joinDate + '. A member from ' + dataHome2.hikers[i].city + " " + dataHome2.hikers[i].state + '</p>';
        htmlHome2 += '</section>';
        htmlHome2 += '</td>';
        htmlHome2 += '<td>';
        htmlHome2 += '<section>';
        htmlHome2 += '<img src="/HikersGuide/design/calendar-2.png" alt="Alternate Text" />';
        htmlHome2 += '<h3>' + dataHome2.events[i].title +'</h3>';
        htmlHome2 += '<p>' + dataHome2.events[i].state + '</p>';
        htmlHome2 += '</section>';
        htmlHome2 += '</td>';
    }
    htmlHome2 += '</Table>';

    var articleBlog = document.getElementById("misc");
    articleBlog.innerHTML = htmlHome2;
}
myHome2.send();