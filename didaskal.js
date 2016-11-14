// jQuery is a Javascript library that gives us shortcuts to manipulating
// the objects on an HTML document.
// If you want to see the jQuery documentation:
// http://api.jquery.com/

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

// Use jQuery to create a <select> HTML element and append the default option
var $selector = $("<select />")
  .append('<option value="0" selected="selected">[choose yours]</option>');

// Iterate through the OPTIONVALUES object and append an option with a pairing
// of key (left) as option value and value (right) as the visible text
for (var prop in OPTIONVALUES) {
  $selector.append(`<option value="${prop}">${OPTIONVALUES[prop]}</option>`);
}

// Use jQuery to create a blank <textarea> HTML element
var $textArea = $("<textarea />");

// Use jQuery to find the HTML element with the ID "alteration-block", and
// assign it to the variable $alterationBlock (notice the pound symbol)
var $alterationBlock = $("#alteration-block");

// Use jQuery to insert our created select element and textarea element into
// the alteration block
$alterationBlock.append($selector, $textArea);

// Basically, jQuery uses CSS selectors to "query" the HTML file and pull
// matching elements. To refresh your memory:
// Selector for finding any element with the class foo: .foo
// Selector for finding any element with the id foo (should only be one): #foo
// Selector for finding any foo element: foo
