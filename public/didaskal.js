// jQuery is a Javascript library that gives us shortcuts to manipulating
// the objects on an HTML document.
// If you want to see the jQuery documentation:
// http://api.jquery.com/

// Use jQuery to find the HTML element with the ID "alteration-block", and
// assign it to the variable $alterationBlock (notice the pound symbol)
var $alterationBlock = $("#alteration-block");

// Create an object containing pairs of option values with the option tag
var OPTIONVALUES = {
  'br': 'linebreak',
  'em': 'italic',
  'b': 'bold',
  'u': 'underline',
  's': 'strikethrough',
};

function addBlock() {
  var $div = $("<div/>");
  // Use jQuery to create a <select> HTML element and append the default option
  var $selector = $("<select/>")
  .append('<option value="0" selected="selected">[choose yours]</option>');

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

  // Use jQuery to insert our created select element and textarea element into
  // the alteration block
  $div.append($selector, $textArea);
  $alterationBlock.append($div);
}

for (var i = 0; i < 5; i++) {
  addBlock();
}

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

  // We now create a new object that contains the pairings of the user's
  // custom names with the corresponding markup elements
  var objecto = {};
  for (var j = 0; j < areas.length; j++) {
    if (selectors[j] !== "0") {
      objecto[areas[j]] = selectors[j];
    }
  }

  // This 'code' variable grabs the user's custom markup input
  var code = $("#code textarea")[0].value;
  code = code.replace(/\r?\n|\r/g, '<br>'); // convert 'newline' to '<br>'

  for (var alteration in objecto) {
    if (objecto.hasOwnProperty(alteration)) {
      // code.replace(regex, string) scans the string and any match found by the
      // 'regex' is replaced by the 'string'
      code = code.replace(new RegExp(alteration, 'g'), objecto[alteration]);
    }
  }

  // jQuery has a special 'parseHTML' function that turns a string (input)
  // into actual HTML
  var html = $.parseHTML(code);

  // Missing for now: the step where we make the substitutions with the user's
  // custom naming conventions

  // We then clear the contents of the #frame div and inject the HTML into it
  $("#frame").empty().append(html);
});

// Basically, jQuery uses CSS selectors to "query" the HTML file and pull
// matching elements. To refresh your memory:
// Selector for finding any element with the class foo: .foo
// Selector for finding any element with the id foo (should only be one): #foo
// Selector for finding any foo element: foo
