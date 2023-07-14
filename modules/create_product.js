import { productControl } from "./products_fetch.js";
const form = document.querySelector('.form');
      

form.addEventListener('submit', async e => {
    e.preventDefault();
   const url = document.querySelector('[data-url]').value,
         name = document.querySelector('[data-name]').value,
         category = document.querySelector('[data-category]').value,
         price = document.querySelector('[data-price]').value,
         description = document.querySelector('[data-description]').value;
         
    try {
      console.log(await productControl.createItem(url,name,price,category,description));
        window.location.href = '/screens/success.html';
    } catch (error) {
        console.log(error)
    }

})