function openCity(evt, city) {

    var tabcontents = document.getElementsByClassName("tabcontent");
    var tabLinks = document.getElementsByClassName("tablinks");

    for(var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = 'none';
    }

    for(var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
    

    document.getElementById(city).style.display = 'block';
}