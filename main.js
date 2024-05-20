const LOGIN_EMAIL = document.getElementById("email")
const LOGIN_PASS = document.getElementById("password")
const LOGIN_FORM = document.getElementById("form")
const LOGIN_PARRAFO = document.getElementById("warnings")

LOGIN_FORM.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    LOGIN_PARRAFO.innerHTML = ""

    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('password')

    if (LOGIN_EMAIL.value !== storedEmail) {
        warnings += `El email no es correcto <br>`
        entrar = true
    }
    if (LOGIN_PASS.value !== storedPassword) {
        warnings += `La contraseña no es correcta <br>`
        entrar = true
    }

    if (entrar) {
        LOGIN_PARRAFO.innerHTML = warnings
    } else {
        window.location.href = "bienvenida.html"
    }
})