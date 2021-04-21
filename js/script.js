
/***************************************
****************************************
1. Reservering Script
****************************************
****************************************/

//reserveerStandaard, reserveerFamilie en reserveerSuite zijn reserveer Buttons id's.
//Bij variabele standaard heb ik gedefinieerd als: Zoek naar de element ID "reserveerStandaard" in mijn html document.
const reserveerStandaard = document.querySelector("#reserveerStandaard");
const reserveerFamilie = document.querySelector("#reserveerFamilie");
const reserveerSuite = document.querySelector("#reserveerSuite");

//Functie gemaakt voor reserveer button. 
//Als de click event is gebeurt dan kamerReserveren "standaardkamer"

reserveerStandaard.addEventListener("click", function(){
    kamerReserveren("suite");
});
reserveerFamilie.addEventListener("click", function(){
    kamerReserveren("familiekamer");
});
reserveerSuite.addEventListener("click", function(){
    kamerReserveren("suite");
});

function kamerReserveren(type) {
    document.getElementById("kamers").style.display = "none";
    document.getElementById("reserveerbevestiging").style.display = "block";
    if (type === "standaardkamer") {
        document.querySelector("#reserveerh2").innerHTML = standardRoom.roomType;
        document.querySelector("#reserveerImg").setAttribute("src", standardRoom.roomImg);
    }
    if (type === "familiekamer") {
        document.querySelector("#reserveerh2").innerHTML = familyRoom.roomType;
        document.querySelector("#reserveerImg").setAttribute("src", familyRoom.roomImg);
    }
    if (type === "suite") {
        document.querySelector("#reserveerh2").innerHTML = suiteRoom.roomType;
        document.querySelector("#reserveerImg").setAttribute("src", suiteRoom.roomImg);
    }
}

const annulerenBtn = document.getElementById("annuleren");

//Functie gemaakt voor annuleren button. 
//Als de click event is gebeurt moet de kamerAnnuleren de volgende opdrachten uitvoeren:
annulerenBtn.addEventListener("click", function () {
    annuleren();
})

//Functie kamer annuleren******************
//************************************** */
function annuleren() {
    let annulerenpopup = window.confirm("Wilt u zeker deze kamer annuleren?");
    if(annulerenpopup) {
        document.querySelector("#bookingForm").reset()
        closeModal()
        document.querySelector("#kamers").style.display="flex";
        document.querySelector("#reserveerbevestiging").style.display = "none";
    }
}

//************************************** */



/***************************************
****************************************
2. Aankomst en vertrek controle script
****************************************
****************************************/

document.querySelector("#aankomstdatum").addEventListener("blur", function () {
    aankomstControle(); 
});
document.querySelector("#vertrekdatum").addEventListener("blur", function () {
    vertrekControle(); 
});
document.querySelector("#vertrekdatum", "#aankomstdatum").addEventListener("blur", function () {
    ToekomstControle(); 
});

function aankomstControle() {
    let aankomst = document.querySelector("#aankomstdatum");
    let aankomstValue = new Date(aankomst.value).setHours(0,0,0,0);
    let vandaag = new Date().setHours(0,0,0,0);
    if (aankomstValue < vandaag) { 
        alert("Onjuist datuminvoer, datum van aankomst is in het verleden");
        aankomst.focus;
    }
}
function vertrekControle() {
    let vertrek = document.querySelector("#vertrekdatum");
    let vertrekValue = new Date(vertrek.value).setHours(0,0,0,0);
    let vandaag = new Date().setHours(0,0,0,0);
    if (vertrekValue < vandaag) { 
        alert("Onjuist datuminvoer, datum van vertrek is in het verleden");
        vertrek.focus;    
    }
}
function ToekomstControle() {
    let aankomst = document.querySelector("#aankomstdatum");
    let vertrek = document.querySelector("#vertrekdatum");
    let aankomstValue = new Date(aankomst.value).setHours(0,0,0,0);
    let vertrekValue = new Date(vertrek.value).setHours(0,0,0,0);
    if (vertrekValue === aankomstValue ) { 
        alert("Onjuist datuminvoer, de duur van de reservering moet minimaal 1 dag zijn");
        document.getElementById("vertrekdatum").style.backgroundColor="red";
        vertrek.focus
    } if (vertrekValue < aankomstValue ) { 
        alert("Onjuist datuminvoer, vertrekdatum is eerder dan de aankomstdatum");
        document.getElementById("vertrekdatum").style.backgroundColor="red";
        vertrek.focus
    } if (vertrekValue > aankomstValue) {
        document.getElementById("vertrekdatum").style.backgroundColor="transparent";
        vertrek.focus
    }
}






    