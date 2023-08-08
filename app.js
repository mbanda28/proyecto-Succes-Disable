const btn = document.querySelector('.btn')
const form = document.querySelector('.formulario')
const inp = document.querySelector('.inp')
const ingresarCorreo = document.querySelector('.p-email-error')
const message = document.querySelector('.message')
const desktop = document.querySelector('.left-desktop')

function submit(event) {
    event.preventDefault();
    const validar = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (validar.test(inp.value)){
        desktop.classList.add('disable')
        message.classList.remove('disable')
        
    } else {
        ingresarCorreo.classList.remove('disable')
        inp.classList.add('inactive')
        
    }
}

form.addEventListener('submit',submit)