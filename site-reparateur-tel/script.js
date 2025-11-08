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


{/* <script src ="script.js">
    
</script> */}