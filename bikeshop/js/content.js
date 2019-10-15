/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/bikeshop.json
*/

var jsonRequest = new XMLHttpRequest();
jsonRequest.open('GET', 'https://joshbloom.github.io/dws1/data/bikeshop.json');
jsonRequest.onload = function () {
    var connection = JSON.parse(jsonRequest.responseText);
	var home = document.getElementById("index");
	var events = document.getElementById("events");
	
	var body="";
	
	if(body = home){
    features(connection);
	plans(connection);
	}
	else if(body = events){
	events(connection);
	}
	else  {
		shopCollections(connection);
	shopProducts(connection);
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
		
        data += '<div>';
        data += '<img src="images/ratings.png" alt="4 star rating" />';
        data += '</div>';
		
        data += '<p><strong>Product</strong></p>';
        data += '<p>' + dFeatures.products[i].description + '</p>';
        data += '<h6><strong>$' + dFeatures.products[i].salePrice +"  "+dFeatures.products[i].price + '</strong></h6>';
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
        dataPlan += '<p>' + dPlans.benefits[i].description +'</p>';
		dataPlan += '</article>';
    }
	
    var sectionHome = document.getElementById("plans");
    sectionHome.innerHTML = dataPlan;
}

function events(dEvents) {
	var imageArray1 = ["images/cyclingRace.png", "images/bikeTrail1.png", "images/biketrail.jpg", "images/cyclingRace2.png", "images/bikeTrail2.png", "images/bikeTrail3.png"];
	
		var dataEvent = '<article>';
	
    for (var i = 0; i < dEvents.events.length; i++) {
		dataEvent += '<img src="' + imageArray1[i] + '"';
        dataEvent += 'alt="' + dEvents.events[i].title + '"/>';
		
        dataEvent += '<h5><em>' + dEvents.events[i].title + '</em></h5>';
        dataEvent += '<p>' + dEvents.events[i].text +'</p>';
		dataEvent += '</article>';
    }
	
    var sectionHome = document.getElementById("articles");
    sectionHome.innerHTML = dataEvent;
}

function shopCollections(dShopC) {

	var dataSCollections = '<aside>';
	dataSCollections += '<img src="images/newCollection.png" alt="new collection of bicycles" />';
	dataSCollections += '<h4><em>New Collection</em></h4>';
	dataSCollections += '<h5>Products</h5>';

    for (var i = 5; i < dShopC.products.length; i++) {
		dataSCollections += '<article>';
		dataSCollections += '<img src="' + dShopC.products[i].imageURL + '"';
        dataSCollections += 'alt="' + dShopC.products[i].title + '"/>';
		
        dataSCollections += '<h5><em>' + dShopC.products[i].title + '</em></h5>';
        dataSCollections += '<p>' + dShopC.products[i].description +'</p>';
		dataSCollections += '<p class="sale">$' + dShopC.products[i].salePrice +" "+ dShopC.products[i].price +'</p>';
		dataSCollections += '</article>';
    }
	dataSCollections += '</aside>';
	
    var sectionHome = document.getElementById("collections");
    sectionHome.innerHTML = dataSCollections;
}

function shopProducts(dShopP) {
	
	var dataSProducts = '<article>';
	
for (var i = 0; i < dShopP.products.length; i++) {
        
        dataSProducts += '<img src="' + dShopP.products[i].imageURL + '"';
        dataSProducts += 'alt="' + dShopP.products[i].title + '"/>';
		
        dataSProducts += '<p>' + dShopP.products[i].description + '</p>';
        dataSProducts += '<h6><em>$' + dShopP.products[i].salePrice +"  "+dShopP.products[i].price + '</em></h6>';
		dataSProducts += '</article>';
    }
	
    var sectionHome = document.getElementById("products");
    sectionHome.innerHTML = dataSProducts;
}


