/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/bikeshop.json
*/

var jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET', 'https://joshbloom.github.io/dws1/data/bikeshop.json');
jsonRequest.onload = function () {

    var connection = JSON.parse(jsonRequest.responseText);

	var body="";
	
	if(body = document.getElementById("index")){
    features(connection);
	plans(connection);
	}
	else if(body = document.getElementById("events")){
	events(connection);
	}
	else{
	shop(connection);
	}
	

};
jsonRequest.send();

function features(dFeatures) {

    var data = '<h4>Shop</h4>';

     data += '<h2>Featured Products</h2>';

    for (var i = 0; i < dFeatures.products.length; i++) {
        data += '<article>';
        data += '<img src="' + dFeatures.products[i].imageURL + '"';
        data += 'alt="' + dFeatures.products[i].title + '"/>';
		
/*        data += '<p class="redSale"><em>sale</em></p>';*/
		
        data += '<div class=“4Rating”>';
        data += '<img src="images/ratings.png" alt="4 star rating" />';
        data += '</div>';
		
        data += '<p><strong>Product</strong></p>';
        data += '<p>' + dFeatures.products[i].description + '</p>';
        data += '<h6><strong>$' + dFeatures.products[i].salePrice +"  "+dFeatures.products[i].price + '</strong>'
		data += '</article>';
    }
	
    var sectionHome = document.getElementById("features");
    sectionHome.innerHTML = data;
}
function plans(dPlans) {

    var dataPlan = '<h4>CycleClub</h4>';

     dataPlan += '<h2><em>Member Benefits</em></h2>';

    for (var i = 0; i < dPlans.benefits.length; i++) {
        dataPlan += '<article>';
	
        dataPlan += '<h5>' + dPlans.benefits[i].title + '</h5>';
        dataPlan += '<p>' + dPlans.benefits[i].description +'</p>'
		dataPlan += '</article>';
    }
	
    var sectionHome = document.getElementById("plans");
    sectionHome.innerHTML = dataPlan;
}
function events(dEvents) {
	
	var imageArray = ["images/cyclingRace.png", "images/bikeTrail1.png", "images/biketrail.jpg", "images/cyclingRace2.png", "images/bikeTrail2.png", "images/bikeTrail3.png"];
	
		var dataEvent = '<article>';
	
    for (var i = 0; i < dEvents.events.length; i++) {
		dataEvent += '<img src="' + imageArray[i] + '"';
        dataEvent += 'alt="' + dEvents.events[i].title + '"/>';
		
        dataEvent += '<h5><em>' + dEvents.events[i].title + '</em></h5>';
        dataEvent += '<p>' + dEvents.events[i].text +'</p>'
		dataEvent += '</article>';
    }
	
    var sectionHome = document.getElementById("articles");
    sectionHome.innerHTML = dataEvent;
}
function shop(dShop) {
	
}