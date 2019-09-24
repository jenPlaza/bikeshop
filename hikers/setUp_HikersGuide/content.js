/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/
//testing
//alert("hello");


var myBlog = new XMLHttpRequest();
myBlog.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

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
    var article = document.getElementsByTagName("h3");
    var htmlBlog = '<h3>';
    article.innerHTML = htmlBlog;

    var imageArray = ["/HikersGuide/design/File_001 (5).png", "/HikersGuide/design/File_001 (10).png", "/HikersGuide/design/File_001 (15).png","/HikersGuide/design/File_001 (12).png", "/HikersGuide/design/File_001 (13).png", "/HikersGuide/design/File_001 (14).png", "/HikersGuide/design/File_001 (18).png"];

    for (var i = 0; i < data1.locations.length; i++) {
        htmlBlog += '<article>';
        htmlBlog += '<img src="' + imageArray[i] + '"';
        htmlBlog += 'alt="' + data1.locations[i].title + '"/>';
        htmlBlog += '<h3>' + data1.locations[i].title + '</h3>';
        htmlBlog += '<dl>';
        htmlBlog += '<dt>by ' + data1.posts[i].author + '</dt>';
        htmlBlog += '<dt>' + data1.posts[i].postDate + '</dt>';
        htmlBlog += '<dt>' + data1.posts[i].moreLink + '</dt>';
        htmlBlog += '</dl>';

        htmlBlog += '</article>';
    }

    htmlBlog += '<article>';
    htmlBlog += '<img src="' + imageArray[i] + '"';
    htmlBlog += 'alt="' + data1.locations[0].title + '"/>';
    htmlBlog += '<h3>' + data1.locations[0].title + '</h3>';
    htmlBlog += '<dl>';
    htmlBlog += '<dt>by ' + data1.posts[0].author + '</dt>';
    htmlBlog += '<dt>' + data1.posts[0].postDate + '</dt>';
    htmlBlog += '<dt>' + data1.posts[0].moreLink + '</dt>';
    htmlBlog += '</dl>';

    htmlBlog += '</article>';

    htmlBlog += '<article>';
    htmlBlog += '<img src="' + imageArray[i] + '"';
    htmlBlog += 'alt="' + data1.locations[3].title + '"/>';
    htmlBlog += '<h3>' + data1.locations[3].title + '</h3>';
    htmlBlog += '<dl>';
    htmlBlog += '<dt>by ' + data1.posts[3].author + '</dt>';
    htmlBlog += '<dt>' + data1.posts[3].postDate + '</dt>';
    htmlBlog += '<dt>' + data1.posts[3].moreLink + '</dt>';
    htmlBlog += '</dl>';

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
    var htmlArticle3 = '';

    htmlArticle3 += '<section>';
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

myBlog.send();
