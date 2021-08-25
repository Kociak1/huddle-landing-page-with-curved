const form = document.querySelector('form')
const email = document.querySelector('#email')

form.addEventListener('submit', e => {
    const reg = /^\S{2,20}@\S{2,10}\.\S{2,5}$/i

    if(!reg.test(email.value)) {
        e.preventDefault()
        form.classList.add('error')
    }
})