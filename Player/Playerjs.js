let musicas = [
    {
        titulo: 'Song 1',
        cantor: 'Cantor 1',
        src: "./musicas/Emotional Mess - Amy Lynn & the Honey Men.mp3",
        img: "./images/Emotional.jpg"
    },
    {
        titulo: 'Song 2',
        cantor: 'Cantor 2',
        src: "./musicas/God Rest Ye Merry Gentlmen - DJ Williams.mp3",
        img: "./images/God.jpg"
    },
    {
        titulo: 'Song 3',
        cantor: 'Cantor 3',
        src: "./musicas/Ice & Fire - King Canyon.mp3",
        img: "./images/Ice.jpg"
    },
    {
        titulo: 'Song 4',
        cantor: 'Cantor 4',
        src: "./musicas/Oh Christmas Tree - DJ Williams.mp3",
        img: "./images/chrismas.jpg"
    },
];
let musica = document.querySelector('audio');
let indexMusica = 0
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderisarMusica(indexMusica)

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 3;

    }
    renderisarMusica(indexMusica);
});
document.querySelector('.proximo').addEventListener('click',() => {
    indexMusica++;
    if(indexMusica > 3 ){
        indexMusica = 0
    }
    renderisarMusica(indexMusica);

});

//Funções
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause');

}
function pausarMusica() {
    musica.pause();
}
function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60; if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos + ' : ' + campoSegundos
}

function renderisarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
         nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].cantor;
         imagem.src = musicas[index].img;
         duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

}
