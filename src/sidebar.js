
function toggleProject() {
    if ($("project")[0].style.display == "none") {
        $("project")[0].style.display = "block";
        window.dispatchEvent(new Event('resize'));
        //$("wrapper").width( $("section").width() - 
        //        ($("sidebar").width() + 
        //        $("project").width())
        //    )
    } else {
        $("project")[0].style.display = "none";
        //$("wrapper").width($("section").width() - $("sidebar").width()); 
        window.dispatchEvent(new Event('resize'));
    }
}