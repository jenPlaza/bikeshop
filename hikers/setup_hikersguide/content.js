/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

//testing
//alert("hello");

var myBlog = new XMLHttpRequest();
myBlog.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
let htmlBlog = document.getElementById("id01");
htmlBlog.innerHTML = "Company A";
myBlog.onload = function () {

    var jsonBlog = JSON.parse(myBlog.responseText);
    //Testing
    //console.log(jsonData.posts[0]);//works
    //console.log(jsonData.posts[0].title);//works

    divALevel1(jsonBlog);
};
function divALevel1(data1) {
    for (var i = 0; i < data1.locations.length; i++) {
        htmlBlog += '<article>';
        htmlBlog += '<h3>' + data1.locations[i].title + '</h3>';
        htmlBlog += '<p>' + data1.locations[i].text + '</p>';
        htmlBlog += '</article>';
    }

    var articleBlog = document.getElementById("aLevel1");
    articleBlog.innerHTML = htmlBlog;
}
myBlog.send();


var myAtricle2 = new XMLHttpRequest();
myAtricle2.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myAtricle2.onload = function () {
    var jsonArticle2 = JSON.parse(myAtricle2.responseText);
    divALevel2(jsonArticle2);
};
function divALevel2(data2) {
    let htmlArticle2 = '';

    //Testing
   // console.log(data.posts.length);//works

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
myAtricle2.send();


var myAtricle3 = new XMLHttpRequest();
myAtricle3.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myAtricle3.onload = function () {

    var jsonArticle3 = JSON.parse(myAtricle3.responseText);
    divALevel3(jsonArticle3);
};

function divALevel3(data3) {
    let htmlArticle3 = '';
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
myAtricle3.send();
