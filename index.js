var button = $('button');
var inputdisplay = $('.inputdisplay')

button.on("click", woo);

function woo() {
  var text = $('.text').val();
  gotobutton(text);
}

function gotobutton(text) {
  inputdisplay.append(`<input type="checkbox">${text}</input><hr>`);
}
