var sections = document.getElementsByClassName("section");
var currentSection = sections[0].id;

function onload() {
    currentSection = sections[0].id;
    console.log(document.baseURI);
    
    if (document.baseURI.lastIndexOf("#") !== -1) {
        currentSection = document.baseURI.substr(document.baseURI.lastIndexOf("#") + 1).toLowerCase() + "-section";
        if (document.getElementById(currentSection) === null) {
            currentSection = sections[0].id;
        };
    };

    for (var section in [].slice.call(sections)) {
        var sectionID = sections[section].id;
        document.getElementById(sectionID).classList.add("hidden");
        document.getElementById(sectionID.replace("section", "button")).classList.remove("menu-button-active-section");
    };

    document.getElementById(currentSection).classList.remove("hidden");
    document.getElementById(currentSection.replace("section", "button")).classList.add("menu-button-active-section");
};
