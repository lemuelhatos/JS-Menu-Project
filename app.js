// *****SELECT ITEMS*****
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-button');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// EDIT OPTION
let editElement;
let editFlag = false;
let editID = "";
// *****EVENT LISTENERES*****
// submit form
form.addEventListener('submit',addItem)
// *****FUNCTIONS*****
function addItem(e){
e.preventDefault();
console.log(grocery.value);
}
// *****LOCAL STORAGE*****

// *****SETUP ITEMS*****