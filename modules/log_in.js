const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
    const email = document.querySelector('[data-email]'),
          password = document.querySelector('[data-password]');
    const regExpEmail =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExpPass = /^(?=.*[A-Z]).{8}$/;
    
    const span = () => {
        return new Promise ((resolve,reject) => {
         resolve = setTimeout(() => {
             window.location.href = '/screens/admin_page.html';
            }, 3000);
        })
    }
    if(!regExpEmail.test(email.value) || !regExpPass.test(password.value)){
        e.preventDefault();
        swal('Lo sentimos', 'No has ingresado un correo valido o una contraseña valida', 'error');
    }else{
        e.preventDefault();
        swal('Felicidades', 'Ha iniciado sesion correctamente', 'success');
        await span();
    }

})