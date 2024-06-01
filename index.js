
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("active-link");
    }

    for(tabcontent of tab-contents){
        tabcontent.classlist.remove("active-tab");
    }
    event.currentTarget.classlist.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
