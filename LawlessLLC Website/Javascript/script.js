// Functionality for Changing Words in H1 // 
var typed = new Typed(".multiple-text", {
    strings: ["Mobile App Development", "Software Development", "Web Development", "System Testing", "System Maintenance"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

// Functionality for Responsive Webpage // 
function navbarResponsive() {
    var x = document.getElementById("myNavBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
  