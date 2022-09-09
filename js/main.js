let inputAdd = document.querySelector("#add-filme");
let elementoListaFilmes = document.querySelector("#listaFilmes");

const adicionarFilme = () => {
  let filmeFavorito = document.querySelector("#add-filme").value;
if(filmeFavorito.endsWith(".JPG")) {    
  listarFIlmesNaTela(filmeFavorito);
  } else if(filmeFavorito.endsWith(".jpg")) {
    listarFIlmesNaTela(filmeFavorito);
  } else if (filmeFavorito.endsWith(".png")){
    listarFIlmesNaTela(filmeFavorito);
  } else if (filmeFavorito.endsWith(".PNG")) {
    listarFIlmesNaTela(filmeFavorito);
  } else if (filmeFavorito.endsWith(".jpeg")) {
    listarFIlmesNaTela(filmeFavorito);
  } else {
    alert("Endereço de filme inválido");
  }
  document.querySelector("#add-filme").value = "";
  document.querySelector("#add-filme").focus();
};

const listarFIlmesNaTela = (filme) => {
  let elementoFilmeFavorito = "<img src=" + filme + ">";
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
};

inputAdd.addEventListener('keypress', (evento) =>{
  if(evento.keyCode === 13) {
    if(!inputAdd.value) return;
    listarFIlmesNaTela(inputAdd.value);
  }
  document.querySelector("#add-filme").value = ""
});
