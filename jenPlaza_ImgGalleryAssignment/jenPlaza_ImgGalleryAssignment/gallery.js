const imageArray = [
    { ImageSrc: "coolInstrument.jpg", ImageCaption: "Cool Instruments", ImageDescription: "I just want to play my Saxophone."},
    { ImageSrc: "instruments4Campfire.jpg", ImageCaption: "Instruments 4 Campfires", ImageDescription: "Campfire Lovin Country Song Singin..." },
    { ImageSrc: "musical-instruments-getty.jpg", ImageCaption: "Musical Instruments Getty", ImageDescription: "Music expresses that which cannot be said and on which it is impossible to be silent." },
    { ImageSrc: "musicalInstruments.jpg", ImageCaption: "Musical Instruments", ImageDescription: "Music is the art of thinking with sounds." },
    { ImageSrc: "windsAndHorns.jpg", ImageCaption: "Wind & Horns", ImageDescription: "When words fail, Music Speaks!" }
];

let imageIndex = 0;

let text = "<h2><font color=brown size=4><strong>Music</strong> & Supplies</font></h2> \n <hr>";

text += '<img id="mainImage" src="' + imageArray[0].ImageSrc + '" width="414" height="275">';
text += "<h3><strong> Cool Instruments</strong></h3>";
text += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";

//Previous button
//var button = document.getElementsByClassName('pagination')[0].getElementsByTagName('button');
//var button = document.getElementsByClassName('pagination')[0];
//document.body.appendChild(button);
//button.addEventListener("click", prev);

var x = document.getElementsByClassName("pagination")[0].getElementsByTagName("button").length;
alert(x);

function prev() {
    imageIndex--;
    document.getElementById("mainImage").src = imageArray[imageIndex].ImageSrc;
    document.getElementsByTagName("H3")[0].innerHTML = imageArray[imageIndex].ImageCaption;
    document.getElementsByTagName("P")[0].innerHTML = imageArray[imageIndex].ImageDescription;
}

//Next button
var button2 = document.getElementsByClassName('pagination')[0].getElementsByTagName("button");
document.body.appendChild(button2);
button2.addEventListener("click", next);

function next() {
    imageIndex++;
    document.getElementById("mainImage").src = imageArray[imageIndex].ImageSrc;
    document.getElementsByTagName("H3")[0].innerHTML = imageArray[imageIndex].ImageCaption;
    document.getElementsByTagName("P")[0].innerHTML = imageArray[imageIndex].ImageDescription;
}

document.getElementById("gallery").innerHTML = text;