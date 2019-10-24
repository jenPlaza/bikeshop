/*
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
	shopProducts(connection);
	}
};

//send the request
jsonRequest.send();

//index Page
function features(dFeatures) {
	//using innerHtml to update elements in the section with an id of features
	
	var p = document.querySelector('p');
	var div = document.querySelector('div');

	//creating a new varible to hold my h4
    var data = '<h2>Shop</h2>';

	//I'm going to take the value of my h2 tag and store it as my varible data
     data += '<h2><strong>Featured Products</strong></h2>';
	data += '<section>';
	//here I'm looping through the products array in the json object and retrieng the info for the image, title, description, and prices for all articles in the features section.
    for (var i = 0; i < dFeatures.products.length; i++) {
        data += '<article class="twentyFiveWidth">';
			
			var sale = p.className;

		if (sale === 'redSale') {
			data += '<p class="redSale">sale</p>';
		}
		else
		{
			data += '<p class="redSaleNo">sale</p>';
		}
		
        data += '<img src="' + dFeatures.products[i].imageURL + '"';
        data += 'alt="' + dFeatures.products[i].title + '"/>';
		
		var cart = div.className;
		
		if( cart === '.cartNo'){
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
		}
		
        data += '<div class="fourrating">';
        data += '<span class="starfill">&#9733;</span><span class="starfill">&#9733;</span><span class="starfill">&#9733;</span><span class="starfill">&#9733;</span><span class="staroutline">&#9734;</span>';
        data += '</div>';
		data += '<br/><br/>';
        data += '<p><strong>Product</strong></p>';
        data += '<p><em>' + dFeatures.products[i].description + '</em></p>';
		data += '<br/>';
        data += '<p>$' + dFeatures.products[i].salePrice +' <strong><em>$'+dFeatures.products[i].price + '</em></strong></p>';
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
    var dataPlan = '<h2>CycleClub</h2>';

	//I'm going to take the value of my h2 tag and store it as my varible dataPlan
     dataPlan += '<h2><strong><em>Member Benefits</em></strong></h2>';

	//here I'm looping through the benefits array in the json object and retrieving the info for the title and description, for all articles in the plans section.
	 dataPlan += '<section>';
    for (var i = 0; i < 2; i++) {
       dataPlan += '<article class="twentyWidth">';
		dataPlan += '<img src="' + imageArray[i]+'"/>';
        dataPlan += '<h4><em>' + dPlans.benefits[i].title + '</em></h4>';
        dataPlan += '<p>' + dPlans.benefits[i].description +'</p>';
		dataPlan += '</article>';
    }
	
		dataPlan += '<article class="twentyWidth">';
		dataPlan += '<img src="' + imageArray[2]+'"/>';
        dataPlan += '<h4><em>' + dPlans.benefits[2].title + '</em></h4>';
        dataPlan += '<form method="post">';
	dataPlan += '<input placeholder="Enter Email" type="email" name="email"><input type="submit" />';
	dataPlan += '</form>';
	dataPlan += '<br />';
		dataPlan += '</article>';
	
	
	
	//here I'm going to take the html value listed for plans and store it as my varible sectionPlans, then I'm going to equal sectionPlans with the new information stored in dataPlan.
    var sectionPlans = document.getElementById("plans");
    sectionPlans.innerHTML = dataPlan;
}

//events page
function events(dEvents) {

	//using innerHtml to update elements in the section with an id of articles
	//creating an array of images that the json object did not include.
	var imageArray1 = ["images/cyclingRace.png","images/bikeTrail1.png", "images/bikeTrail2.png", "images/cyclingRace2.png", "images/biketrail.jpg", "images/bikeTrail3.png"];
	
	//creating a new varible to asign the article tag too.
		var dataEvent = '<section>';
		dataEvent += '<h1><em>Current Events</em></h1>';
	//here I'm looping through the events array in the json object and retrieving the info for the title and text, for all articles in the articles section.
    for (var i = 0; i < dEvents.events.length; i++) {
		dataEvent += '<article class="fortyEightWidth">';
		dataEvent += '<img src="' + imageArray1[i] + '"';
        dataEvent += 'alt="' + dEvents.events[i].title + '"/>';
		dataEvent += '<section>';
        dataEvent += '<h4><em>' + dEvents.events[i].title + '</em></h4>';
        dataEvent += '<p><em>' + dEvents.events[i].text +'</em></p>';
		dataEvent += '<br/>';
		dataEvent += '<p><input type="submit" value="Read More"/></p>';
		dataEvent += '</section>';
		dataEvent += '</article>';
    }
	
	//here I'm going to take the html value listed for articles and store it as my varible sectionEvents, then I'm going to equal sectionEvents with the new information stored in dataEvent.
    var sectionEvents = document.getElementById("articles");
    sectionEvents.innerHTML = dataEvent;
}

//shop page
function shopProducts(dShopP) {

	//using innerHtml to update elements in the section with an id of products
	//creating a new varible to asign the article tag too.
	var dataSProducts = '<section>';
	
	//here I'm looping through the products array in the json object and retrieving the info for the image, title, description, and prices, for all articles in the products section.
for (var i = 0; i < dShopP.products.length; i++) {
        dataSProducts += '<article class="thirtyWidth">';
        dataSProducts += '<img src="' + dShopP.products[i].imageURL + '"';
        dataSProducts += 'alt="' + dShopP.products[i].title + '"/>';
		
        dataSProducts += '<h4>' + dShopP.products[i].title + '</h4>';
        dataSProducts += '<h4>$' + dShopP.products[i].salePrice +"  "+dShopP.products[i].price + '</h4>';
	dataSProducts += '<ul>';
          dataSProducts += '<li><a href="#"><img src="images/zoom-in-2.png" alt="zoom-in icon" ></a></li>';
         dataSProducts += '<li> <a href="#"><img src="images/shopping-cart.png" alt="shopping-cart icon" ></a></li>';
          dataSProducts += '<li><a href="#"><img src="images/heart.png" alt="favorite icon" ></a></li>';
        dataSProducts += '</ul>';
		dataSProducts += '</article>';
    }
	dataSProducts += '</section>';
	//here I'm going to take the html value listed for products and store it as my varible sectionPro, then I'm going to equal sectionPro with the new information stored in dataSProducts.
    var sectionPro = document.getElementById("products");
    sectionPro.innerHTML = dataSProducts;
}


