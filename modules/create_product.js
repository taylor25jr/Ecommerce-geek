import { productControl } from "./products_fetch.js";
const form = document.querySelector('.form');
const category = document.querySelector('[data-category]');

category.addEventListener('input', e => {
    const inpuValue = e.target.value;
    const expReg = /^[a-z]+$/;

    if(!expReg.test(inpuValue)){
        e.target.value = inpuValue.replace(/[^a-z]/g, '');
    }
});

const create = async e => {
    const url = document.querySelector('[data-url]').value,
    name = document.querySelector('[data-name]').value,
    category = document.querySelector('[data-category]').value,
    price = document.querySelector('[data-price]').value,
    description = document.querySelector('[data-description]').value;

    await productControl.createItem(url,name,price,category,description);
    
    }


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
                countDiversos++;}
            });

            if(countStarwars >= 12 || countConsolas >= 12 || countDiversos >= 12){
                swal('Opss','Solo se admiten 12 productos por categoria','info') ;
                return e.preventDefault();
            }else{
                 create();
                window.location.href = '/screens/success.html'
            }
        
         
} catch (error) {
console.log(error);
}
})

