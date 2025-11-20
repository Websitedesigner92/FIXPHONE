function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
function fillTest() {
    document.querySelector("#quickForm [name=name]").value = "Test";
    document.querySelector("#quickForm [name=phone]").value = "0600000000";
}

function submitQuickForm(e) {
    e.preventDefault();
    var f = new FormData(e.target);
    document.getElementById("quickMsg").textContent =
        "Demande reçue. Nous vous contactons sous 24h.";
    setTimeout(
        () => (document.getElementById("quickMsg").textContent = ""),
        5000
    );
    return false;
}

function submitContact(e) {
    e.preventDefault();
    var out = {};
    new FormData(e.target).forEach((v, k) => (out[k] = v));
    console.log("contact form", out);
    document.getElementById("contactMsg").textContent =
        "Demande envoyée. Vérifiez votre téléphone ou email.";
    return false;
}
function resetContact() {
    document.getElementById("contactForm").reset();
    document.getElementById("contactMsg").textContent =
        "Formulaire réinitialisé.";
    setTimeout(
        () => (document.getElementById("contactMsg").textContent = ""),
        2500
    );
}


var adress = "10 Avenue du Maréchal Foch 78400 Chatou";
var numero = " 📞 07 56 80 72 54";
var email = "";
const nomEntreprise = "fixphone Réparateur Téléphone";
document.querySelectorAll(".adress").forEach(function(el) {
  el.textContent = adress;
});

document.querySelectorAll(".numero").forEach(function(el) {
  el.textContent = numero;
});


const GPS = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.43490530338957!2d2.1572903219112614!3d48.88938226077377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e663103029f281%3A0x35d4b650854b63f6!2s10%20Av.%20du%20Mar%C3%A9chal%20Foch%2C%2078400%20Chatou!5e1!3m2!1sfr!2sfr!4v1763248490994!5m2!1sfr!2sfr";

document.querySelectorAll(".gps").forEach(el => {
  el.src = GPS;
});

document.querySelectorAll(".nomEntreprise").forEach(function(el) {
  el.textContent = nomEntreprise;
});
