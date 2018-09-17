var div_cmd = document.getElementById('head-title');
var text_cmd = 'about-me';
var div_out = document.getElementById('text-output');
var text_out = 'Olá, seja bem vindo! Me chamo Daniel e sou apaixonado por Desenvolvimento Web. Sou Técnico em Informártica e estou cursando Ciência da Computação na Universidade Federal de Campina Grande. Tenho experiência com frameworks JavaScript para Frontend (Angular 5, ReactJS, VueJS) e Nodejs no Backend, já usei outras tecnologias (Django, Ruby, PHP), mas atualmente estou focando em JS, que é minha paixão. Veja a seguir alguns projetos em que me envolvo/envolvi.';

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
