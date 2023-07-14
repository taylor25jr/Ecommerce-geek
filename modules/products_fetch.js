const productList = () => fetch('http://localhost:3000/producto').then(answer => answer.json());

const createItem = (img,title,price,category,description) => {
    return fetch('http://localhost:3000/producto', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify({img,title,price,category,description, id: uuid.v4()}),
    })
}

const deleteProduct = id => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: 'DELETE',
    })
}

const getInfo = id => fetch(`http://localhost:3000/producto/${id}`).then(answer => answer.json());

const updateProduct = (img,title,price,category,description,id) => {
return fetch(`http://localhost:3000/producto/${id}`, {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({img,title,price,category,description}),

})
.then(answer => console.log(answer));
}

export  const productControl = {
productList,
createItem,
deleteProduct,
getInfo,
updateProduct,
}

        