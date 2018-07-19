// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

function scrollToAboutMe(){
  elmnt = document.getElementById("about");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
  w3_close();
}

function scrollToProjects(){
  elmnt = document.getElementById("projects");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
  w3_close();
}

function scrollToHome(){
  elmnt = document.getElementById("home");
  scrollTo(document.documentElement, elmnt.offsetTop, 200);
}