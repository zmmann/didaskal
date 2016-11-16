// jQuery is a Javascript library that gives us shortcuts to manipulating
// the objects on an HTML document.
// If you want to see the jQuery documentation:
// http://api.jquery.com/

// Use jQuery to find the HTML element with the ID "alteration-block", and
// assign it to the variable $alterationBlock (notice the pound symbol)
var $alterationBlock = $("#alteration-block");

// Create an object containing pairs of option values with the option tag
var OPTIONVALUES = {
  'linebreak'     : 'br',
  'italics'       : 'em',
  'bold'          : 'strong',
  'underline'     : 'u',
  'strikethrough' : 's',
  'superscript'   : 'superscript',
  'subscript'     : 'subscript',
  'small'         : 'small',
  'large'         : 'large',
  'typewriter'    : 'tt',
  'paragraph'     : 'p',
  'section'       : 'div',
  'headline'      : 'h1',
  'subheader'     : 'h2',
};

function addBlock() {
  var $div = $("<div/>");
  // Use jQuery to create a <select> HTML element and append the default option
  var $selector = $("<select/>")
  .append('<option value="0" selected="selected">[choose yours]</option>');

  // Iterate through the OPTIONVALUES object and append an option with a pairing
  // of key (left) as option value and value (right) as the visible text
  for (var prop in OPTIONVALUES) {
    $selector.append(`<option value="${prop}">${OPTIONVALUES[prop]}</option>`);
  }

  // Use jQuery to create a blank <textarea> HTML element
  var $textArea = $("<textarea/>");

  // Use jQuery to insert our created select element and textarea element into
  // the alteration block
  $div.append($selector, $textArea);
  $alterationBlock.append($div);
}

for (var i = 0; i < 13; i++) {
  addBlock();
}

var $button = $("<button/>").text("click meh");
$button.on("click", function () {
  var areas = $("textarea");
  areas = areas.map(function (idx, el) {
    return el.value;
  });

  var selectors = $("select");
  selectors = selectors.map(function (idx, el) {
    return el.value;
  });

  var objecto = {};
  for (var j = 0; j < areas.length; j++) {
    objecto[areas[j]] = selectors[j];
  }

  console.log(objecto);
});

$alterationBlock.append($button);

// Basically, jQuery uses CSS selectors to "query" the HTML file and pull
// matching elements. To refresh your memory:
// Selector for finding any element with the class foo: .foo
// Selector for finding any element with the id foo (should only be one): #foo
// Selector for finding any foo element: foo
