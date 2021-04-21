timeofday();

function timeofday() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime&&currentTime < 12) {
        document.getElementById("dagDeel").innerHTML = "Goedemorgen. Welkom bij The Academy Hotel en Restaurant.";
    }
    if (12 <= currentTime&&currentTime < 18) {
        document.getElementById("dagDeel").innerHTML = "Goedemiddag. Welkom bij The Academy Hotel en Restaurant.";
    }
    if (18 <= currentTime&&currentTime < 24) {
        document.getElementById("dagDeel").innerHTML = "Goedeavond. Welkom bij The Academy Hotel en Restaurant.";
    }
}

