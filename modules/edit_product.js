import { productControl } from "./products_fetch.js";

const form = document.querySelector('[data-form]'),
      url = new URL(window.location),
      id = url.searchParams.get('id'),
      img = document.querySelector('[data-url]'),
      category = document.querySelector('[data-category]'),
      title = document.querySelector('[data-name]'),
      price = document.querySelector('[data-price]'),
      description = document.querySelector('[data-description]');
      console.log()

const infoPromise = async () => {

        if(id === null) window.location.href = '../screens/error.html';
   
        const product = await productControl.getInfo(id);
        console.log(product)
        img.value = product.img;
        category.value = product.category;
        title.value = product.title;
        price.value = product.price;      
        description.value = product.description;     
     
}

infoPromise();

form.addEventListener('submit', async e => {
    e.preventDefault();

    try {
        await productControl.updateProduct(img.value,title.value,price.value,category.value,description.value,id);
    } catch (error) {
        console.log(error)
    }

})
    