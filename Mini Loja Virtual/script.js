const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: "./images/image.jpg",
        quantidade: 0,
    },
    {
        id: 1,
        nome: 'short',
        img: "./images/image.jpg",
        quantidade: 0,
    },
    {
        id: 2,
        nome: 'sapato',
        img: "./images/image.jpg",
        quantidade: 0,
    },

]

inicializarLoja = () => {
    containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML += `
        
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p> `+val.nome+`</p>
            <a  key="`+val.id+`"href="#">"Adicionar ao carrinho</a>

        
        </div>
        `;
    })
}
inicializarLoja();

atualizarCarrinho = () => {
    containerProdutos = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0 ){
        containerCarrinho.innerHTML += `
        
        <p>`+val.nome+` | quantidade: `+ val.quantidade+`</p>
        <hr>
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p> `+val.nome+`</p>
            <a  key="`+val.id+`"href="#">"Adicionar ao carrinho</a>

        
        </div>
        `;
        }
    })


}
 var links = document.getElementsByTagName('#');

for(var i = 0;  i < links.length;  i++ ) {
    links[i].addEventListener('click',function() {

        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
    })

}


