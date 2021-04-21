function Room (roomType, roomImg, roomShortDesc, roomLongDesc) {
    this.roomType = roomType;
    this.roomImg = roomImg;
    this.roomShortDesc = roomShortDesc;
    this.roomLongDesc = roomLongDesc;
}

var standardRoom = new Room(
    "Onze standaardkamer", 
    "images/standaardkamer.jpg", 
    "Comfortabele hotelkamers voor een ontspannen verblijf.", 
    "Hotelkamers beschikken over twinbedden, een gezellig zitje in de kamer, een eigen badkamer met douche en toilet en een eigen terras."
)

var familyRoom = new Room(
    "Onze familiekamer", 
    "images/familiekamer.jpg", 
    "Ruime familiekamers voor het hele gezin.", 
    "Familiekamers zijn geschikt voor gezinnen, families of groepen. Deze kamers voor 4, 5 of 6 personen hebben een aparte woonkamer, twee slaapkamers, een badkamer en een eigen terras."
)
var suiteRoom = new Room(
    "Onze suite", 
    "images/suiteKamer.jpg", 
    "Luxe, ruime suites voor extra comfort.", 
    "De suites zijn rustig gelegen en hebben een moderne uitstraling. In de suite kunt u genieten van een aparte woonkamer en ruime slaapkamer. De luxe badkamer biedt een comfortabel ligbad, inloopdouche en toilet."
);

console.log(standardRoom);
console.log(familyRoom);
console.log(suiteRoom);
