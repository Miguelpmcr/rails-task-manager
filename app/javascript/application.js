// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const row = document.querySelector(".row");
const addItem = document.querySelector(".add-item");

const newProductInput = document.querySelector(".product");
const newPriceInput = document.querySelector(".price");
const newPhotoInput = document.querySelector("#inputImage");
let newCardPhoto = document.createElement('img');


addItem.addEventListener('click', (e) => {
    if (e.target.className === 'addItemBtn') {
        addCardContent();
        addCardPhoto();
    }
})

function addCardPhoto() {
    let reader = new FileReader();

    reader.onload = function() {
        var dataURL = reader.result;
        newCardPhoto.src = dataURL;
    }
    reader.readAsDataURL(newPhotoInput.files[0]);
}

function addCardContent() {

    let newContainer = document.createElement('div');
    let newCard = document.createElement('div');
    let newCardProduct = document.createElement('h4');
    let newCardPrice = document.createElement('p');
    let newBtn = document.createElement('button');



    newCard.className = 'card col';
    newContainer.className = 'container';
    newBtn.className = 'orderBtn';
    newBtn.textContent = 'Order';

    newCardPrice.textContent = newPriceInput.value;
    newCardProduct.textContent = newProductInput.value;

    newCard.appendChild(newCardPhoto);
    newCard.appendChild(newContainer);
    newContainer.appendChild(newCardProduct);
    newContainer.appendChild(newCardPrice);
    newContainer.appendChild(newBtn);

    row.appendChild(newCard);

}
