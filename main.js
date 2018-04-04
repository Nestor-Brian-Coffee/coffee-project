"use strict";

function renderCoffee(coffee) {
    var coffeeClass;
    if (coffee.roast === "dark") {
        coffeeClass = "drk-card"
    } if (coffee.roast === "medium") {
        coffeeClass = "med-card"
    }if (coffee.roast === "light") {
        coffeeClass = "lt-card"
    }
    var html = '<div class="card col-3 mr-3 mt-3  coffeeCards ' + coffeeClass + '">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}



function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        var search = document.querySelector("#search-field").value.toLowerCase();
        if ((coffee.roast === selectedRoast || selectedRoast === "All") && coffee.name.toLowerCase().includes(search)=== true) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}
];
//
// function searchResults(coffees) {
//     var filter = input.value;
//     for (var i = 0; i < coffees.length; i++) {
//         var test;
//         test = coffees[i].getElementsByTagName("h3")[0];
//         if (test.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             coffees[i].style.display = "";
//         } else {
//             coffees[i].style.display = "none";
//         }
//     }
// }

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchField = document.querySelector("#search-field");

tbody.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', updateCoffees);
searchField.addEventListener('input' , updateCoffees);