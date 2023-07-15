import { productControl } from "./products_fetch.js";
const firstList = document.querySelector('[data-starwars]');
const secodndList = document.querySelector('[data-consolas]');
const thirdList = document.querySelector('[data-diversos]');

const createItem = (img,title,price) => {
const article = document.createElement('article');
article.classList.add('card');

const inner = `
<img src="${img}" alt=""  class="card__img">
<h1 class="name__Card">${title}</h1>
<h2 class="price__Card">${price}</h2>
<a class="link__card" href="">Ver producto</a>`

article.innerHTML = inner;
return article;
}

const itemlist = async () => {
    const items =  await productControl.productList();
    let countStarwars = 0;
    let countConsolas = 0;
    let countDiversos = 0;
    items.forEach(item => {
        if(countStarwars < 6){
        if(item.category === "starwars"){
       const newProduct = createItem(item.img,item.title,item.price);
       firstList.appendChild(newProduct);
         countStarwars++;
        }};
        if(countConsolas < 6){
        if(item.category === "consolas"){
        const newProduct = createItem(item.img,item.title,item.price);
       secodndList.appendChild(newProduct);
       countConsolas++;
        }};

        if(countDiversos < 6){
        if(item.category === "diversos"){
        const newProduct = createItem(item.img,item.title,item.price);
       thirdList.appendChild(newProduct);
       countDiversos++;
        }}; 
    });
} 

itemlist()