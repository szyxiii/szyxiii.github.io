// Register clipboard elements
function registerClipoardElements(tag) {
    var elements = document.getElementsByClassName(tag);

    var addToClipboard = function() {
        var content = this.getAttribute("content");
        navigator.clipboard.writeText(content);
    };

    Array.from(elements).forEach(function(element) {
        element.addEventListener('click', addToClipboard);
    });
}

// Enable Bootstrap tooltips 
function enableTooltips() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });
}

// Random
function random(max=1) {
    return Math.floor(Math.random() * max)
}

// Random facts
var facts = [
    "If I don't know something, the documentation does.",
    "When creating this site, the Bootstrap documentation was worn down to holes.",
    "I re-create my GitHub repositories so that no one will see my stupid mistakes in commits history.",
    "No, it's not a rIdIcUloUs SlOw PRoGRamMiNg LanGuAgE, it's you who are using it wrong.",
    "Vkontakte even has bugs on the page with the bug report.",
    "#JuniorLivesMatter",
    "Beep-bop bop. boop.",
    "Only a Sith deals in absolutes.",
    "Done is better than perfect.",
    "You can't read my nickname properly.",
    "You know... ah... forget 'bout it..."
];

function showRandomFact() {
    var fact = '/Fact text here/';

    if(Math.random() > 0.1)
        fact = facts[random(facts.length)];
    else
        fact = 'There are ' + (facts.length + 1) + ' facts here in total.';

    if(fact == document.getElementById('fact').innerHTML)
        showRandomFact();
    else
        document.getElementById('fact').innerHTML = fact;
}


registerClipoardElements("clipboard");
enableTooltips();
showRandomFact();
