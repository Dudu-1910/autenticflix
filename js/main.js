function mostraFilmes() {
  let filmesLancamentos = ['https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg', 'https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png', 'https://br.web.img2.acsta.net/pictures/22/05/18/09/51/0772429.jpg', 'https://calendariocinemark.cinemark.com.br/wp-content/uploads/2022/03/Avatar-2.png'];

  let melhoresTodosOsTempos = ['https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg', 'https://upload.wikimedia.org/wikipedia/pt/0/0d/EsdlaIII.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/93/20/20120876.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/86/98/32/19870786.jpg'];

  let filmesComedia = ['https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg', 'https://br.web.img3.acsta.net/medias/nmedia/18/87/29/37/19874003.jpg', 'https://br.web.img2.acsta.net/medias/nmedia/18/95/73/93/20425650.jpg', 'https://upload.wikimedia.org/wikipedia/pt/f/fe/Themaask.jpg'];

  let filmesAcaoAventura = ['https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg', 'https://br.web.img2.acsta.net/pictures/22/06/03/13/41/4557063.jpg', 'https://br.web.img3.acsta.net/pictures/210/327/21032794_20130828164937825.jpg', 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/23345-cartaz.jpg'];

  let filmesDesenho = ['https://images-na.ssl-images-amazon.com/images/I/91GuxUoAATL.jpg', 'https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81G5DqNT2SL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51zf56rdBSL._SX368_BO1,204,203,200_.jpg'];


  let tituloLancamentos = document.write('<h4 class="subtitulo-filmes"> Lançamentos </h4>');

  for (let i = 0; i < filmesLancamentos.length; i++) {
    document.write('<img class="img-filmes" src=' + filmesLancamentos[i] + '>');
  }

  let tituloMelhores = document.write('<h4 class="subtitulo-filmes"> Melhores de todos os tempos </h4>');

  for(let i = 0; i < melhoresTodosOsTempos.length; i++) {
    document.write('<img class="img-filmes" src=' + melhoresTodosOsTempos[i] + '>');
  }

  let tituloComedia = document.write('<h4 class="subtitulo-filmes"> Comédias </h4>');

  for(let i = 0; i < filmesComedia.length; i++) {
    document.write('<img class="img-filmes" src=' + filmesComedia[i] + '>');
  }

  let tituloAcaoAventura = document.write('<h4 class="subtitulo-filmes"> Ação e Aventura </h4>');

  for(let i = 0; i < filmesAcaoAventura.length; i++) {
    document.write('<img class="img-filmes" src=' + filmesAcaoAventura[i] + '>');
  }

  let tituloDesenho = document.write('<h4 class="subtitulo-filmes"> Desenhos </h4>');

  for(let i = 0; i < filmesDesenho.length; i++) {
    document.write('<img class="img-filmes" src=' + filmesDesenho[i] + '>');
  }
}
mostraFilmes();

function mostraSeries() {
  let tituloPrincipalSerie = document.write('<h2 id="series" class="titulo-series"> Séries </h2>');
  
  let seriesLancamento = ['https://upload.wikimedia.org/wikipedia/pt/b/bb/Bom_Dia%2C_Ver%C3%B4nica.jpg', 'https://img.olhardigital.com.br/wp-content/uploads/2022/06/Im-Groot-691x1024.jpg', 'https://br.web.img3.acsta.net/pictures/22/07/26/16/42/3428140.jpg', 'https://br.web.img3.acsta.net/pictures/22/05/18/13/11/0152273.jpg'];


  let melhoresSeries = ['https://assets0.minhaserie.com.br/uploads/editor_pictures/000/076/149/content_pic.jpg', 'https://musicnonstop.uol.com.br/wp-content/uploads/2021/08/PT-BR_LCDP_S5_Main_Vertical_RGB_PRE.jpg', 'https://upload.wikimedia.org/wikipedia/pt/4/4c/Two_and_a_Half_Men_%286%C2%AA_temporada%29.jpg', 'https://br.web.img3.acsta.net/pictures/21/08/05/10/07/5681271.jpg'];

  let tituloSeriesLancamento = document.write('<h4 class="subtitulo-series"> Lançamento </h4>');

  for(let i = 0; i < seriesLancamento.length; i++) {
    document.write('<img class="img-series" src=' + seriesLancamento[i] + '>');
  }

  let tituloMelhoresSeries = document.write('<h4 class="subtitulo-series"> Melhores Séries </h4>');


  for(let i = 0; i < melhoresSeries.length; i++) {
    document.write('<img class="img-series" src=' + melhoresSeries[i] + '>');
  }
}
mostraSeries();

function mostraDesenhos() {
  let tituloPrincipalDesenhos = document.write('<h2 id="desenhos" class="titulo-desenhos"> Desenhos infantis </h2>');

  let desenhosClassicos = ['https://www.themoviedb.org/t/p/w500/t0VTMU4UI8XlaryymvNKjnD1TXc.jpg', 'https://br.web.img2.acsta.net/c_310_420/pictures/15/11/13/21/22/317594.jpg', 'https://cdn.fstatic.com/media/movies/covers/2019/08/2019-08-07_1_Bi5Zfkw.png', 'https://br.web.img3.acsta.net/c_310_420/pictures/14/07/07/10/28/344191.jpg'];

  let tituloDesenhosClassicos = document.write('<h4 class="subtitulo-desenhos"> Desenhos clássicos </h4>');

  for(let i = 0; i < desenhosClassicos.length; i++) {
    document.write('<img class="img-desenhos" src=' + desenhosClassicos[i] + '>');
  }
}
mostraDesenhos();

let fraseFinal = document.write('<h5 class="frase-final"> Tudo isso e muito mais ! <br> Escolha seu predileto e assista já.')


const rodape = () => {
  document.write('<footer class="rodape"><p> Desenvolvido por Eduardo Henrique | 2022 <br><br> Todos os direitos reservados </p></footer>');
}

rodape();