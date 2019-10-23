saleAllsaleAllsaleAllsaleAllsaleAllsaleAll/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/bikeshop.json
*/

//Creating XMLHTTPRequest object
var jsonRequest = new XMLHttpRequest();

//Request json by retrieving info from https://joshbloom.github.io/dws1/data/bikeshop.json
jsonRequest.open('GET', 'https://joshbloom.github.io/dws1/data/bikeshop.json');

//once the response has loaded
jsonRequest.onload = function () {

	var indexBody = document.getElementById("index");
	var eventsBody = document.getElementById("events");
	
	//I'm going to parse the json arrray, and save it to variable connection
    var connection = JSON.parse(jsonRequest.responseText);
	
	//conditional statements to return info from the index, events, shop, or contact page.
	// body includes an id element of index, then convert html from these two functions
	if(indexBody){
    features(connection);
	plans(connection);
	}
	
	// body includes an id element of events, then convert html from this function
	else if(eventsBody){
	events(connection);
	}
	
	//otherwise, convert html from these two functions
	else  {
		shopCollections(connection);
	shopProducts(connection);
	}
};

//send the request
jsonRequest.send();

//index Page
function features(dFeatures) {
	//using innerHtml to update elements in the section with an id of features
	
	var p = document.querySelector('p');
	var saleAll = document.querySelectorAll('.twentyFiveWidth');
	/*var cartNo = document.getElementsByClassName('.cartNo');
	var cartYes = document.getElementsByClassName('.addCart');*/
	var saleYes = document.querySelector('.redSale');
	/*var saleNo = document.querySelector('.redSaleNo');*/
	
	//creating a new varible to hold my h4
    var data = '<h3>Shop</h3>';

	//I'm going to take the value of my h2 tag and store it as my varible data
     data += '<h1>Featured Products</h1>';
	data += '<section>';
	//here I'm looping through the products array in the json object and retrieng the info for the image, title, description, and prices for all articles in the features section.
    for (var i = 0; i < dFeatures.products.length; i++) {
        data += '<article class="twentyFiveWidth">';
		
		
		
		for (var i = 0; i < saleAll.length; i++) {
			var sale = saleAll.className;
		if (sale.className.contains( 'redSale') {
			data += '<p class="redSale">sale</p>';
		}
		else
		{
			data += '<p class="redSaleNo">sale</p>';
		}
		}
		
        data += '<img src="' + dFeatures.products[i].imageURL + '"';
        data += 'alt="' + dFeatures.products[i].title + '"/>';
		
		/*if(cartNo){
			 data += '<div class="cartNo">';
			data += '<img class="cart" src="images/cart.png" alt="cart png" />';
			data += '<p><strong>Add To Cart</strong></p>';
			data += '</div>'; 
		}
		else
		{
			data += '<div class="addCart">';
			data += '<img class="cart" src="images/cart.png" alt="cart png" />';
			data += '<p><strong>Add To Cart</strong></p>';
			data += '</div>';
		}*/
		
        data += '<div class="fourrating">';
        data += '<span class="starfill">&#9733;</span><span class="starfill">&#9733;</span><span class="starfill">&#9733;</span><span class="starfill">&#9733;</span><span class="staroutline">&#9734;</span>';
        data += '</div>';
		data += '<br/><br/>';
        data += '<p><strong>Product</strong></p>';
        data += '<p><em>' + dFeatures.products[i].description + '</em></p>';
		data += '<br/>';
        data += '<p><strong>$' + dFeatures.products[i].salePrice +"  "+dFeatures.products[i].price + '</strong></p>';
		data += '</article>';
    }
	
	//here I'm going to take the html value listed for features and store it as my varible sectionHome, then I'm going to equal sectionHome with the new information stored in data.
    var sectionFeatures = document.getElementById("features");
    sectionFeatures.innerHTML = data;
}

function plans(dPlans) {

	//using innerHtml to update elements in the section with an id of plans
	var imageArray = ["images/truck.png", "images/wrench.png", "images/envelope.png"];
	
	//creating a new varible to hold my h4
    var dataPlan = '<h3>CycleClub</h3>';

	//I'm going to take the value of my h2 tag and store it as my varible dataPlan
     dataPlan += '<h1><em>Member Benefits</em></h1>';

	//here I'm looping through the benefits array in the json object and retrieving the info for the title and description, for all articles in the plans section.
	 dataPlan += '<section>';
    for (var i = 0; i < dPlans.benefits.length; i++) {
       dataPlan += '<article class="twentyWidth">';
		dataPlan += '<img src="' + imageArray[i]+'"/>';
        dataPlan += '<h4><em>' + dPlans.benefits[i].title + '</em></h4>';
        dataPlan += '<p><em>' + dPlans.benefits[i].description +'</em></p>';
		dataPlan += '</article>';
    }
	
	
	
	//here I'm going to take the html value listed for plans and store it as my varible sectionPlans, then I'm going to equal sectionPlans with the new information stored in dataPlan.
    var sectionPlans = document.getElementById("plans");
    sectionPlans.innerHTML = dataPlan;
}

//events page
function events(dEvents) {

	//using innerHtml to update elements in the section with an id of articles
	//creating an array of images that the json object did not include.
	var imageArray1 = ["images/cyclingRace.png", "images/bikeTrail1.png", "images/biketrail.jpg", "images/cyclingRace2.png", "images/bikeTrail2.png", "images/bikeTrail3.png"];
	
	//creating a new varible to asign the article tag too.
		var dataEvent = '<article>';
	
	//here I'm looping through the events array in the json object and retrieving the info for the title and text, for all articles in the articles section.
    for (var i = 0; i < dEvents.events.length; i++) {
		dataEvent += '<img src="' + imageArray1[i] + '"';
        dataEvent += 'alt="' + dEvents.events[i].title + '"/>';
		
        dataEvent += '<h5><em>' + dEvents.events[i].title + '</em></h5>';
        dataEvent += '<p>' + dEvents.events[i].text +'</p>';
		dataEvent += '</article>';
    }
	
	//here I'm going to take the html value listed for articles and store it as my varible sectionEvents, then I'm going to equal sectionEvents with the new information stored in dataEvent.
    var sectionEvents = document.getElementById("articles");
    sectionEvents.innerHTML = dataEvent;
}

//shop page
function shopCollections(dShopC) {

	//using innerHtml to update elements in the section with an id of collections
	
	//creating a new varible to asign the Aside tag too.
	var dataSCollections = '<aside>';
	
	//I'm going to take the value of my image, h4, and h5 and store it as my variable dataSCollections
	dataSCollections += '<img src="images/newCollection.png" alt="new collection of bicycles" />';
	dataSCollections += '<h4><em>New Collection</em></h4>';
	dataSCollections += '<h5>Products</h5>';

	//here I'm looping through the products array in the json object and retrieving the info for the image, title, description, and prices, for all articles in the collections section.
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
	
	//here I'm going to take the html value listed for collections and store it as my varible sectionColl, then I'm going to equal sectionColl with the new information stored in dataSCollections.
    var sectionColl = document.getElementById("collections");
    sectionColl.innerHTML = dataSCollections;
}

function shopProducts(dShopP) {

	//using innerHtml to update elements in the section with an id of products
	//creating a new varible to asign the article tag too.
	var dataSProducts = '<article>';
	
	//here I'm looping through the products array in the json object and retrieving the info for the image, title, description, and prices, for all articles in the products section.
for (var i = 0; i < dShopP.products.length; i++) {
        
        dataSProducts += '<img src="' + dShopP.products[i].imageURL + '"';
        dataSProducts += 'alt="' + dShopP.products[i].title + '"/>';
		
        dataSProducts += '<p>' + dShopP.products[i].description + '</p>';
        dataSProducts += '<h6><em>$' + dShopP.products[i].salePrice +"  "+dShopP.products[i].price + '</em></h6>';
		dataSProducts += '</article>';
    }
	
	//here I'm going to take the html value listed for products and store it as my varible sectionPro, then I'm going to equal sectionPro with the new information stored in dataSProducts.
    var sectionPro = document.getElementById("products");
    sectionPro.innerHTML = dataSProducts;
}


