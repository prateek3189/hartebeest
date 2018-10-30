// getElementsByClassName
console.log(document.getElementsByClassName('list'));

// querySelector
console.log(document.querySelector('.list'));

// querySelectorAll
console.log(document.querySelectorAll('.list'));

// Iterate all list items
let items = document.querySelectorAll('.list');

for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Iterate through foreach
let forEach = Array.prototype.forEach;

forEach.call(items, (item) => {
    console.log(item);
});

let itemContainer = document.querySelector(".some-class ul");
let childLi = document.querySelectorAll(".some-class ul li");

var newItem = document.createElement("LI");
newItem.className = "live-list";
newItem.innerText = "New List";


console.log(childLi.length);
itemContainer.appendChild(newItem);
childLi = document.querySelectorAll(".some-class ul li");
console.log(childLi.length);
