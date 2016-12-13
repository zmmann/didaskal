// DidaSkal: A Theater for Code Performance 

// jQuery is a Javascript library that provides shortcuts to manipulating
// the objects on an HTML document.
// If you want to see the jQuery documentation:
// http://api.jquery.com/

// Use jQuery to find the HTML element with the ID "alteration-block", and
// assign it to the variable $alterationBlock (notice the pound symbol)
var $alterationBlock = $("#alteration-block");

// Create an object containing pairs of option values with the option tag
var OPTIONVALUES = {
  'em': 'italic',
  'b': 'bold',
  'u': 'underline',
  's': 'strikethrough',
  'span class=smallcaps': 'small caps',
  'span class=whiteout': 'whiteout',
  'span class=darkgray': 'dark gray',
  'span class=lightgray': 'light gray',
  'button': 'button',
  'input': 'input field',
  'mark': 'highlight',
  'q': 'quotation marks',
  'sup': 'superscript',
  'p class=rightalign': 'right align',
  'p class=centeralign': 'center align',
  'blockquote': 'blockquote',
  'br': 'linebreak',
  'h1': 'headline',
  'p': 'paragraph',
};

function addBlock() {
  var $div = $("<div/>");
  // Use jQuery to create a <select> HTML element and append the default option
  var $selector = $("<select/>")
  .append('<option value="0" selected="selected">[select tag]</option>');

  // Iterate through the OPTIONVALUES object and append an option with a pairing
  // of key (left) as option value and value (right) as the visible text
  for (var prop in OPTIONVALUES) {
    if (OPTIONVALUES.hasOwnProperty(prop)) {
      $selector.append(
        `<option value="${prop}">${OPTIONVALUES[prop]}</option>`);
    }
  }

  // Use jQuery to create a blank <textarea> HTML element
  var $textArea = $("<textarea/>");

  // Use jQuery to insert created select element and textarea element into
  // the alteration block
  $div.append($selector, $textArea);
  $alterationBlock.append($div);
}

for (var i = 0; i < 4; i++) {
  addBlock();
}

  // Add button to add more tag fields
var $addtag = $("#add-button");

$addtag.on("click", function () {
  addBlock();
  });

  // Add THE button
var $button = $("#le-button");

$button.on("click", function () {
  var areas = $("#alteration-block textarea");
  areas = areas.map(function (idx, el) {
    return el.value;
  });

  var selectors = $("select");
  selectors = selectors.map(function (idx, el) {
    return el.value;
  });

  // Create a new object that contains the pairings of the user's
  // custom names with the corresponding markup elements
var objecto = {}, key, val;

for (var j = 0; j < areas.length; j++) {
  if (selectors[j] !== "0") {
    key = areas[j].replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    val = selectors[j];
    objecto[key] = val;
  }
}

  // This 'code' variable grabs the user's custom markup input
  var code = $("#code textarea")[0].value;
  code = code.replace(/\r?\n|\r/g, '<br>'); // convert 'newline' to '<br>'

for (var alteration in objecto) {
  if (objecto.hasOwnProperty(alteration)) {
    // code.replace(regex, string) scans the string and any match found by the
    // 'regex' is replaced by the 'string'
    var substitution = objecto[alteration];
    var openAlt = `<${alteration}>`, closeAlt = `</${alteration}>`;
    var openSub = `<${substitution}>`, closeSub = `</${substitution}>`;
    code = code.replace(new RegExp(openAlt, 'g'), openSub);
    code = code.replace(new RegExp(closeAlt, 'g'), closeSub);
  }
}
  // jQuery has a special 'parseHTML' function that turns a string (input)
  // into actual HTML
  var html = $.parseHTML(code);

  // Clear the contents of the #frame div and inject the HTML into it
  $("#frame").empty().append(html);

  console.log(objecto)
});

// Credits:

// Concept & Design by Zach Mann (zachmankofsky.com)
// Coding consultation courtesy of Bihn Kim (angel.co/bihn-kim)
