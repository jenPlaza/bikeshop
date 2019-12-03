/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
*/

function filter(evt, category) {

        var tabcontent = document.getElementsByClassName("tabcontent");

        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        var tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(category).style.display = "block";
        evt.currentTarget.className += " active";
    }


function search() {
    var input = document.getElementById("check").value;

    if (input === "chattahoochee") {
        alert("November 19: Chattahoochee Challenge Adventure Race, 1036 Broadway Columbus, GA");
    }
    else if (input === "extinction") {
        alert("April 22: The Race Against Extinction, Any place Washington MAll, Washington, DC");
    }
    else if  (input === "turkey") {
        alert("Nov 19: Turkey Trek 5K Family Hike, 2100 East Centerville-Station Centerville, OH");
    }
    else if (input === "wanderer") {
        alert("Nov 10: Weekday Wanderer - Caledon State Park, 3401 Courthouse Road North Chesterfiel, VA");
    }
    else if  (input === "veterans") {
        alert("Nov 05: Veterans Appreciation Walk and Reception, 7030 Garrison St. Arvada, CO");
    }
    else {
        alert("There is no event with that name.");
    }
}

input.addEventListener('blur', search(), false);

function openForm() {
    document.getElementById("mailingList").style.display = "block";
}




