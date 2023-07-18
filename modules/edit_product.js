import { productControl } from "./products_fetch.js";

let category;
const form = document.querySelector('[data-form]'),
      url = new URL(window.location),
      id = url.searchParams.get('id'),
      img = document.querySelector('[data-url]'),
      starwars = document.querySelector('[data-category-starwars]'),
      consolas = document.querySelector('[data-category-consolas]'),
      diversos = document.querySelector('[data-category-diversos]'),
      title = document.querySelector('[data-name]'),
      price = document.querySelector('[data-price]'),
      description = document.querySelector('[data-description]');


const infoPromise = async () => {

        if(id === null) window.location.href = '../screens/error.html';
   
        const product = await productControl.getInfo(id);
        img.value = product.img;
        title.value = product.title;
        price.value = product.price;      
        description.value = product.description;
        
        
    
}

infoPromise();

form.addEventListener('submit', async e => {
    e.preventDefault();

    try {
        switch (true) {
        case starwars.checked:
        category = "starwars";
        break;
        case consolas.checked:
        category = "consolas";
        break;
        case diversos.checked:
        category = "diversos";
        break;
        default:}
        await productControl.updateProduct(img.value,title.value,price.value,category,description.value,id);
    } catch (error) {
        console.log(error)
    }
})
    