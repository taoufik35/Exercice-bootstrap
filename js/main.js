let elt = document.getElementById("mainTitle");
elt.innerText = "VOICI MON TITRE DE PAGE PAR JS";

let sub = document.getElementById("subTitle");
sub.innerText = "VOICI MON SOUS-TITRE DE PAGE PAR JS";

let cont = document.getElementsByClassName("content");
    for(var i = 0; i < cont.length;i++){
        cont[i].style.backgroundColor = "blue";
    }
    
    function deleteContent(){
        var art = document.getElementsByTagName("article");
            art[0].style.display = "none";
    }