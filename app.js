// *****SELECT ITEMS*****

const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
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
form.addEventListener("submit", addItem);
// *****FUNCTIONS*****
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    if(value) {
        console.log('value is falsy')
    }
    const id = new Date().getTime().toString();
    if (value && !editFlag ) {
        console.log("add item to the list");    
    } else if (value  && editFlag ) {
        console.log('editing');
    } else {
    displayAlert("please enter value", "danger");
    }
}
// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

}
// *****LOCAL STORAGE*****

// *****SETUP ITEMS*****