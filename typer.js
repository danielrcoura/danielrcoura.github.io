var div_cmd = document.getElementById('head-title');
var text_cmd = 'about-me';
var div_out = document.getElementById('text-output');
var text_out = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis quo minima est exercitationem tenetur, facilis quae doloribus accusantium, omnis, vel amet earum quibusdam. Animi doloremque praesentium distinctio voluptates rerum.';

function command(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 100);
}

function output(str, el) {
  setInterval(function() { el.innerHTML = str; }, 1400);
}

command(text_cmd, div_cmd);;
output(text_out, div_out);
