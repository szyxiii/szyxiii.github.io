// Enable Bootstrap tooltips 
$(function() {
 $('[data-toggle="tooltip"]').tooltip()
});

// Register clipboard elements
var elements = document.getElementsByClassName("clipboard");

var addToClipboard = function() {
 var content = this.getAttribute("content");
 navigator.clipboard.writeText(content);
};

Array.from(elements).forEach(function(element) {
  element.addEventListener('click', addToClipboard);
});