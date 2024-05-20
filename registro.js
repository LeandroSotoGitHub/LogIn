const NOMBRE = document.getElementById("nombre")
const APELLIDO = document.getElementById("apellido")
const EMAIL = document.getElementById("email")
const PASS = document.getElementById("password")
const FORM = document.getElementById("form")
const PARRAFO = document.getElementById("warnings")
const MODAL = document.getElementById("welcomeModal")
const MODAL_USER_NAME = document.getElementById("modalUserName")
const MODAL_EMAIL = document.getElementById("modalEmail")
const MODAL_PASSWORD = document.getElementById("modalPassword")
const CLOSE_MODAL = document.getElementById("closeModal")

FORM.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    PARRAFO.innerHTML = ""
    if (NOMBRE.value.length < 3) {
        warnings += `El nombre ingresado es muy corto <br>`
        entrar = true
    }
    if (APELLIDO.value.length < 3) {
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if (!regexEmail.test(EMAIL.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if (PASS.value.length < 8) {
        warnings += `La contraseña es muy corta <br>`
        entrar = true
    }

    if (entrar) {
        PARRAFO.innerHTML = warnings
    } else {
        // Guardar datos en localStorage
        localStorage.setItem('nombre', NOMBRE.value)
        localStorage.setItem('apellido', APELLIDO.value)
        localStorage.setItem('email', EMAIL.value)
        localStorage.setItem('password', PASS.value)
        
        PARRAFO.innerHTML = "Enviado"
        MODAL_USER_NAME.textContent = NOMBRE.value
        MODAL_EMAIL.textContent = EMAIL.value
        MODAL_PASSWORD.textContent = PASS.value
        MODAL.style.display = "flex"
    }
})

CLOSE_MODAL.addEventListener("click", () => {
    MODAL.style.display = "none"
})

window.addEventListener("click", (event) => {
    if (event.target == MODAL) {
        MODAL.style.display = "none"
    }
})