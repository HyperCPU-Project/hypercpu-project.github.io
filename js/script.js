var sections = document.getElementsByClassName("section");
var root = document.querySelector(":root");
var transitionDuration = (parseFloat(getComputedStyle(root).getPropertyValue("--transition-duration")) * 1000);

function onload() {
    var currentSectionID = sections[0].id;

    if (document.baseURI.lastIndexOf("#") !== -1) {
        currentSectionID = document.baseURI.substring(document.baseURI.lastIndexOf("#") + 1).toLowerCase() + "-section";

        if (document.getElementById(currentSectionID) === null) {
            currentSectionID = sections[0].id;
        };
    };

    var currentSection = document.getElementById(currentSectionID);
    var currentSectionName = currentSection.dataset.name;
    var currentMenuButton = document.getElementById(currentSectionID.replace("section", "button"));
    
    document.title = "HyperCPU Project" + ((currentSectionName.length !== 0) ? (": " + currentSectionName) : "");

    currentSection.style.display = "inherit";
    currentMenuButton.classList.add("menu-button-active-section");
    currentMenuButton.focus();

    for (var sectionString in [].slice.call(sections)) {
        var sectionID = sections[sectionString].id;

        if (sectionID === currentSectionID) {
            continue;
        };

        var section = document.getElementById(sectionID);
        var menuButton = document.getElementById(sectionID.replace("section", "button"));

        section.classList.add("hidden");
        
        if (menuButton.classList.contains("menu-button-active-section")) {
            menuButton.classList.remove("menu-button-active-section");
        };
    };

    setTimeout(() => {
        currentSection.classList.remove("hidden");

        for (var sectionString in [].slice.call(sections)) {
            var sectionID = sections[sectionString].id;
            var section = document.getElementById(sectionID);

            if (section.classList.contains("hidden")) {
                section.style.display = "none";
            };
        };
    }, transitionDuration);
    
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, (transitionDuration * 2));
};