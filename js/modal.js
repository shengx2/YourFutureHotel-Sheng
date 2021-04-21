/***************************************
****************************************
Samenvatting in Modal
****************************************
****************************************/
// constant aan modal ID elements definieren
const modal = document.querySelector("#modal");
const openButton = document.querySelector("#reserveerFormBtn");
const overzichtVoornaam = document.querySelector("#overzichtVoornaam");
const overzichtAchternaam = document.querySelector("#overzichtAchternaam");
const overzichtGeslacht = document.querySelector("#overzichtGeslacht");
const overzichtAdres = document.querySelector("#overzichtAdres");
const overzichtPostcode = document.querySelector("#overzichtPostcode");
const overzichtPlaats = document.querySelector("#overzichtPlaats");
const overzichtLand = document.querySelector("#overzichtLand");
const overzichtEmail = document.querySelector("#overzichtEmail");
const overzichtAankomst = document.querySelector("#overzichtAankomst");
const overzichtVertrek = document.querySelector("#overzichtVertrek");
const overzichtKamers = document.querySelector("#overzichtKamers");
const closeButton = document.querySelector("#annuleerModal");
const sluitModal = document.querySelector("#sluitModal");



document.querySelector("#reserveerFormBtn").addEventListener("click", function(event){
    event.preventDefault();
    openModal();
});

closeButton.addEventListener("click", function() {
    annuleren();
});

sluitModal.addEventListener("click", function() {
    closeModal();
});




function openModal(){
    if(document.querySelector("#voornaam").value != "" && document.querySelector("#achternaam").value != "" && document.querySelector("#email").value != "" && document.querySelector("#vertrekdatum").value != "" && document.querySelector("#aankomstdatum").value != "" && document.querySelector("#aantalKamers").value != ""){
        modal.style.display = "block";
        overzichtVoornaam.innerHTML = "Voornaam: " + document.querySelector("#voornaam").value;
        overzichtAchternaam.innerHTML = "Achternaam: " + document.querySelector("#achternaam").value;
        if (document.querySelector("#vrouw:checked")) {
            overzichtGeslacht.innerHTML = "Geslacht: Vrouw";
        } else if (document.querySelector("#man:checked")) {
            overzichtGeslacht.innerHTML = "Geslacht: Man";
        };
        if(document.querySelector("#adres").value != ""){
            overzichtAdres.innerHTML = "Adres: " + document.querySelector("#adres").value;
        }
        if(document.querySelector("#postcode").value != ""){
            overzichtPostcode.innerHTML = "Postcode: " + document.querySelector("#postcode").value;
        }
        if(document.querySelector("#plaats").value != ""){
            overzichtPlaats.innerHTML = "Plaats: " + document.querySelector("#plaats").value;
        }
        if(document.querySelector("#land").value != ""){
            overzichtLand.innerHTML ="Land: " + document.querySelector("#land").value;
        }
        overzichtEmail.innerHTML ="Email: " + document.querySelector("#email").value;
        overzichtAankomst.innerHTML ="Aankomst datum: " +document.querySelector("#aankomstdatum").value;
        overzichtVertrek.innerHTML = "Vertrek datum: "+ document.querySelector("#vertrekdatum").value;
        overzichtKamers.innerHTML = "Aantal Kamers: "+ document.querySelector("#aantalKamers").value;
    }

}

function closeModal() {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};
