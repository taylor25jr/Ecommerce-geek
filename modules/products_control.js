import { productControl } from "./products_fetch.js";


const createProduct = (img,title,price,id) => {
  const article = document.createElement('article');
  article.classList.add('card');
  const newProduct = `
 
  <div class="img__card">
  <img src="${img}" alt="" class="card__img" />
  <button id="${id}"  class="delete_btn"><img src="/img/delete.svg" alt="" class="delete__icon"  /></button>
  <a href="/screens/edit.html?id=${id}"> <img src="/img/edit.svg" alt="" class="edit__icon"></a>
  </div>
  <h1 class="name__Card">${title}</h1>
  <h2 class="price__Card">$ ${price}</h2>
  <a class="link__card" href="">Ver producto</a>
  
  `
  article.innerHTML = newProduct;
  const deleteItem = article.querySelector('.delete_btn');
  deleteItem.addEventListener('click', async e => {
    try {
      await productControl.deleteProduct(id);
      console.log(productControl.deleteProduct())
    } catch (error) {
      console.log(error)
    }
    
})


  return article;
  }
  const container = document.querySelector('[data-container]')

const returnPromise = async () => {

  const list = await productControl.productList();
  const create = document.querySelector('.cards__info');
create.addEventListener('click', e => {
  if(list.length === 18){
    e.preventDefault();
   return swal('Error','Solo son maximo 18 productos','error');
  }
});
  
    try {
      const data = await productControl.productList();
        data.forEach(card => {
            const newItem = createProduct(card.img,card.title,card.price,card.id);
            container.appendChild(newItem);
        });
    } catch (error) {
        console.log(error)
    }
}
returnPromise();
