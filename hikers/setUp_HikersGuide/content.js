/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/
//testing
//alert("hello");

var myBlog = new XMLHttpRequest();
myBlog.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
var htmlBlog = document.getElementById("id01");
htmlBlog.innerHTML = "Company A";
myBlog.onload = function () {

    var jsonBlog = JSON.parse(myBlog.responseText);
    //Testing
    //console.log(jsonData.posts[0]);//works
    //console.log(jsonData.posts[0].title);//works

    secALevel1(jsonBlog);
    secALevel2(jsonBlog);
    secALevel3(jsonBlog);
    secALevel4(jsonBlog);
};
function secALevel1(data1) {
    for (var i = 0; i < data1.locations.length; i++) {
        htmlBlog += '<article>';
        htmlBlog += '<h3>' + data1.locations[i].title + '</h3>';
        htmlBlog += '<p>' + data1.locations[i].text + '</p>';
        htmlBlog += '</article>';
    }

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
    var htmlArticle3 = '';
    htmlArticle3 += '<dl >';
    htmlArticle3 += '<dt><strong><a href="#">All Posts</a></strong></dt>';
    htmlArticle3 += '<dt><strong><a href="#">Nunc & sed</a></strong></dt>';
    htmlArticle3 += '<dt><strong><a href="#">Massa</a></strong></dt>';
    htmlArticle3 += '<dt><strong><a href="#">Consequat</a></strong></dt>';
    htmlArticle3 += '</dl >';
    htmlArticle3 += '<br /> <br />';
    htmlArticle3 += '<h2>All Posts</h2>';
    htmlArticle3 += '<section>';
    htmlArticle3 += '<img src="/HikersGuide/design/white.jpg" alt="Alternate Text" />';
        htmlArticle3 += '<p><strong>' + data3.locations[0].title + '</strong></p>';
        htmlArticle3 += '<h3>' + data3.locations[0].text + '</h3>';
        htmlArticle3 += '<dl>';
    htmlArticle3 += '<dt><strong>by ' + data3.posts[0].author + '</strong></dt>';
    htmlArticle3 += '<dt><strong>' + data3.posts[0].postDate + '</strong></dt>';
    htmlArticle3 += '<dt><strong>' + data3.posts[0].moreLink + '</strong></dt>';
        htmlArticle3 += '</dl>';
        htmlArticle3 += '</section>';


        htmlArticle3 += '<article>';
        htmlArticle3 += '<img src="/HikersGuide/design/File_001.png" alt="Alternate Text" />';

        htmlArticle3 += '<p><strong>' + data3.posts[1].title + '</strong></p>';

    htmlArticle3 += '<h3>' + data3.posts[1].subtitle + '</h3>';
    htmlArticle3 += '<p>' + data3.posts[1].text + '</p>';

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
        htmlArticle4 += '<p><strong>' + data4.locations[2].title + '</strong></p>';
    htmlArticle4 += '<h3>' + data4.locations[2].text + '</h3>';
    htmlArticle4 += '<p>' + data4.posts[1].text + '</p>';
        htmlArticle4 += '<dl>';
        htmlArticle4 += '<dt><strong>by ' + data4.posts[2].author + '</strong></dt>';
        htmlArticle4 += '<dt><strong>' + data4.posts[2].postDate + '</strong></dt>';
        htmlArticle4 += '<dt><strong>' + data4.posts[2].moreLink + '</strong></dt>';
        htmlArticle4 += '</dl>';
    htmlArticle4 += '</article>';


    htmlArticle4 += '<article>';
    htmlArticle4 += '<img src="/HikersGuide/design/fall-background-photo.jpg" alt="Alternate Text" />';
    htmlArticle4 += '<p><strong>' + data4.locations[3].title + '</strong></p>';
    htmlArticle4 += '<h3>' + data4.locations[3].text + '</h3>';
    htmlArticle4 += '<p>' + data4.posts[1].text + '</p>';
    htmlArticle4 += '<dl>';
    htmlArticle4 += '<dt><strong>by ' + data4.posts[3].author + '</strong></dt>';
    htmlArticle4 += '<dt><strong>' + data4.posts[3].postDate + '</strong></dt>';
    htmlArticle4 += '<dt><strong>' + data4.posts[3].moreLink + '</strong></dt>';
    htmlArticle4 += '</dl>';
    htmlArticle4 += '</article>';


    htmlArticle4 += '<section>';
    htmlArticle4 += '<h3>' + data4.posts[5].subtitle + '</h3>';
    htmlArticle4 += '<h2>' + data4.posts[5].text + '</h2>';

    htmlArticle4 += '<dl>';
    htmlArticle4 += '<dt>by ' + data4.posts[5].author + '</dt>';
    htmlArticle4 += '<dt>' + data4.posts[5].postDate + '</dt>';
    htmlArticle4 += '<dt>' + data4.posts[5].moreLink + '</dt>';
    htmlArticle4 += '</dl>';
    htmlArticle4 += '</section>';


    var articleBlog = document.getElementById("aLevel4");
    articleBlog.innerHTML = htmlArticle4;
}

myBlog.send();
