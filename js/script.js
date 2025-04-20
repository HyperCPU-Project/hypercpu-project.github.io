var sections = [ "home", "install", "docs", "faq", "links" ];

function switchSection(sectionName) {
    sections.forEach((section) => {
        if (section != sectionName) {
            document.getElementById(section + "-section").classList.add("hidden");
        };
    });
    document.getElementById(sectionName + "-section").classList.remove("hidden");
}

var currentSection = sections[0];

if (document.baseURI.lastIndexOf("#") !== -1) {
    currentSection = document.baseURI.substr(document.baseURI.lastIndexOf("#") + 1).toLowerCase();
    if (document.getElementById(currentSection + "-section") === null) {
        currentSection = sections[0];
    };
};

switchSection(currentSection);
