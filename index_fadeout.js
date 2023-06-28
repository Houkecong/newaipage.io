 
window.onload = function () {
    var title = document.getElementById("title");
    var title_bottom = document.getElementById("title_bottom");
    var title_english = document.getElementById("title_english");
    var title1 = document.getElementById("title1");
    var title2 = document.getElementById("title2");
    var title3 = document.getElementById("title3");
    var light = document.getElementById("light");
    setTimeout(function fadeout() {
       $(document).ready(function(){
            $("#title").fadeOut("slow");
            $("#title_bottom").fadeOut("slow");
            $("#title_english").fadeOut("slow");
            $("#title1").fadeOut("slow");
            $("#title2").fadeOut("slow");
            $("#title3").fadeOut("slow");
            $("#light").fadeIn("slow");
        })
        
        /*title_bottom.style.display = "none";
        title_english.style.display = "none";
        title1.style.display = "none";
        title2.style.display = "none";
        title3.style.display = "none";
        light.style.display = "block";*/
    }
        , 6000);
    
}

