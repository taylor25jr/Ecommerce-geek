import { productControl } from "./products_fetch.js";
const form = document.querySelector('.form');
const starwars = document.querySelector('[data-category-starwars]'),
consolas = document.querySelector('[data-category-consolas]'),
diversos = document.querySelector('[data-category-diversos]');

const create = async e => {
    let category;
    const url = document.querySelector('[data-url]').value,
    name = document.querySelector('[data-name]').value,
    price = document.querySelector('[data-price]').value,
    description = document.querySelector('[data-description]').value;
    
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

    await productControl.createItem(url,name,price,category,description); };


    
form.addEventListener('submit', async e => {
    e.preventDefault();
        
        try {
    const data = await productControl.productList();
    let countStarwars = 0;
    let countConsolas = 0;
    let countDiversos = 0;
   
    data.forEach(item => {
    if (item.category === "starwars") {
    countStarwars++;}
    if(item.category === "consolas"){
    countConsolas++;}
    if(item.category === "diversos"){
    countDiversos++;
    }

    
});


if((starwars.checked && countStarwars >= 0 && countStarwars < 12)){
    create();
    return window.location.href = '/screens/success.html'
}
if(consolas.checked && countConsolas >= 0 && countConsolas < 12){
    create();
    return window.location.href = '/screens/success.html'
}
if(diversos.checked && countDiversos >= 0 && countDiversos < 12){
    create();
    return window.location.href = '/screens/success.html'
}else{
    swal('error','errror','error');
}

} catch (error) {
console.log(error);
}
})

