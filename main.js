const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")
const WHATSAPP_NUMBER = "5577998729737"

function toggleMenu() {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-menu-4-line")
    hamburger.classList.toggle("ri-close-large-line")
}

hamburger.addEventListener("click", toggleMenu)

navLink.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("left-[0]")) toggleMenu()
    })
})

const contactForm = document.getElementById("contact-form")

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const nome = document.getElementById("nome").value.trim()
        const telefone = document.getElementById("telefone").value.trim()
        const mensagem = document.getElementById("mensagem").value.trim()

        let texto = `Olá! Meu nome é ${nome}.`
        if (telefone) texto += ` Meu telefone é ${telefone}.`
        texto += `\n${mensagem}`

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
        window.open(url, "_blank", "noopener")
    })
}

const year = document.getElementById("year")

if (year) {
    year.textContent = new Date().getFullYear()
}
