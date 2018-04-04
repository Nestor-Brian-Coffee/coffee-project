"use strict";

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var temp;
var temp2;
for (var i = 0; i < coffees.length; i++) {
    temp = document.createElement("div");
    temp.className = "card col-3 mr-3 mt-3 coffeeCards";
    // temp.classList.add('new-class');
    temp.innerHTML = "<h3>" + coffees[i].name + "</h3>";
    document.getElementsByClassName("row")[0].appendChild(temp);
    temp2 = document.createElement("p");
    temp2.className = "card-text";
    temp2.style.textAlign = "center";
    temp2.innerHTML = coffees[i].roast;
    document.getElementsByClassName("card")[i].appendChild(temp2);
    if (coffees[i].roast === "dark") {
        temp.classList.add("drk-card")
    }
    if (coffees[i].roast === "medium"){
        temp.classList.add("med-card")
    }
    if (coffees[i].roast === "light"){
        temp.classList.add("lt-card")
    }
}
// tbody.innerHTML = renderCoffees(coffees);
    submitButton.addEventListener('click', updateCoffees);
