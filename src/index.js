//const path = require('path')

//console.log("file://" + path.join(__dirname, 'src/sidebar.html'))
//$('#sidebar').load("file://" + path.join(__dirname, '/sidebar.html'),)

console.log ("Width of Section: " + $("section").width())
console.log ("Width of Sidebar: " + $("sidebar").width())
console.log ("Width of Project: " + $("project").width())
console.log ("Width of Wrapper: " + $("wrapper").width())

$("wrapper").width($("section").width() - ($("sidebar").width() + $("project").width()))
console.log ("Width of Wrapper: " + $("wrapper").width())

window.onresize = function() {
    if ($("project")[0].style.display == "none") {
        $("wrapper").width($("section").width() - $("sidebar").width())
    } else {
        $("wrapper").width($("section").width() - 
            ($("sidebar").width() + 
            $("project").width())
        )
    }
    console.log("Wrapper (resize) " + $("wrapper").width())
};