/**
 * DOM API
 * Kuidas kasutada Javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seatud see js fail.
 */

const h1element = document.querySelector('h1');
h1element .innerText = "Head Teed!"


const fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];

const fruitListCointainer = document.querySelector('#fruit-list');


function renderList() {
    const orderedListElement = document.createElement('ol');
    fruitListCointainer.innerHTML = "";
    
    for(let i = 0; i < fruits.length; i++) {
        const listElement = document.createElement('li');

        const spanElement = document.createElement('span');
        listElement.innerText = fruits[i];

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "🗑️";
        deleteButton.classList.add('delete-btn');
        deleteButton.setAttribute('data-index', i); 


        listElement.appendChild(spanElement);
        listElement.appendChild(deleteButton);

        orderedListElement.appendChild(listElement);

    }
    fruitListCointainer.appendChild(orderedListElement);
};

renderList();




const dontTouchMeButton = document.querySelector('#dont-touch-me-button');

dontTouchMeButton.addEventListener('click', (event) => {
    console.log(event);
    alert("Ei tohtinud ju");
});

const addNewFruitForm = document.querySelector('#add-new-fruits-form');
addNewFruitForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const fruitInput = formData.get('fruit');
    console.log(fruitInput);

    if(!fruitInput.trim()) return;

    fruits.push(fruitInput);
    renderList();

    event.target.reset();
    


});

// Kustutame elemente

fruitListCointainer.addEventListener('click', (event) => {
    const buttonElement = event.target.closest('.delete-btn');
    const index = parseInt(buttonElement.getAttribute("data-index"));

    // TODO imploment check for index
        fruits.splice(index, 1);
         renderList()   
   
});