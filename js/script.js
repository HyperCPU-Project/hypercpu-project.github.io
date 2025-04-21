var sections = [ "home", "install", "docs", "faq", "links" ];
var currentSection = sections[0];

function switchSection(newSection) {
    sections.forEach((section) => {
        document.getElementById(section + "-section").classList.add("hidden");
    });

    document.getElementById(newSection + "-section").classList.remove("hidden");
}

if (document.baseURI.lastIndexOf("#") !== -1) {
    currentSection = document.baseURI.substr(document.baseURI.lastIndexOf("#") + 1).toLowerCase();
    if (document.getElementById(currentSection + "-section") === null) {
         currentSection = sections[0];
    };
};

switchSection(currentSection);
