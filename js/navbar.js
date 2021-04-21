/***************************************
****************************************
Nav bar en active class
****************************************
****************************************/


var myurl = window.location.pathname.split("/");
var lasturl = myurl[myurl.length-1];
var homepage;

if (lasturl == "index.html") {
    homepage = ("DIT IS EEN HOMEPAGE");
} else {
    homepage = ("DIT IS NIET DE HOMEPAGE");
}

console.log(homepage);



const currentpage = location.href;
const navLinks = document.querySelectorAll('li a[href]');
const navLength = navLinks.length


loopActive();

function loopActive() {
    for (var i = 0; i < navLinks.length; i++){
        if (navLinks[i].href === currentpage){
            navLinks[i].className = "active"
        }
    }
}
