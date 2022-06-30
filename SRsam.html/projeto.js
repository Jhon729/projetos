const itens = [
    {
        id: 0,
        nome: "pc gamer",
        Img: "image.jpg",
        quantidade: 0, 

    },
    {
        id: 1,
        nome: "mouse gamer",
        Img: "image.jpg",
        quantidade: 0, 

    },
    {
        id: 2,
        nome: "teclado gamer",
        img: "image.jpg",
        quantidade: 0, 

    }
]

inicializarloja = () => {
    let conteiner = document.getElementsByName('produtos');
    itens.map((val) =>{

        conteiner.innerHTML+= ` 
        
        <div class= "produto-single" > 
        <img src= " ` +val.img+` "  />
        <P> ` +val.nome+ ` </p>
        <a  key= " `+val.nome+` "href= "" > Adicionar ao carrinho<\a>
        
        </div>
        
        `
    })
}
 inicializarloja();