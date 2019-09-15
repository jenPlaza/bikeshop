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

function divALevel1(data) {

    //Testing
    // console.log(data.posts.length);//works

    for (var i = 0; i < data.locations.length; i++) {
        htmlBlog += '<article>';
        htmlBlog += '<h3>' + data.locations[i].title + '</h3>';
        htmlBlog += '<p>' + data.locations[i].text + '</p>';
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

function divALevel2(data) {
    let htmlArticle2 = '';

    //Testing
   // console.log(data.posts.length);//works

   for (var i = 0; i < data.posts.length; i++) {
       htmlArticle2 += '<article>';
       htmlArticle2 += '<img src="' + data.posts[i].imageURL + '"';
       htmlArticle2 += 'alt="' + data.posts[i].subtitle + '"/>';
        
       htmlArticle2 += '<p>' + data.posts[i].subtitle + '</p>';

       htmlArticle2 += '<h3>' + data.posts[i].title + '</h3>';

       htmlArticle2 += '<dl>';
       htmlArticle2 += '<dt>by ' + data.posts[i].author + '</dt>';
       htmlArticle2 += '<dt>' + data.posts[i].postDate + '</dt>';
       htmlArticle2 += '<dt>' + data.posts[i].moreLink + '</dt>';
       htmlArticle2 += '</dl>';
       htmlArticle2 += '</article>';
    }

    var articleBlog = document.getElementById("aLevel2");
    articleBlog.innerHTML = htmlArticle2;
}
myAtricle2.send();
