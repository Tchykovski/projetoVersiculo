const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


async function newQuote() {

    const livros = ["Genesis", "Exodo", "Levitico", "Numeros", "Deuteronomio", "Josue", "Juizes", "Rute", "Samuel", "Reis", "Crônicas", "Esdras", "Neemias", "Ester", "Jo", "Salmos", "Proverbios", "Eclesiastes", "Cantares", "Isaias", "Jeremias", "Ezequiel", "Daniel", "Oseias", "Joel", "Amos", "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias", "Mateus", "Marcos", "Lucas", "Joao", "Corintios", "Galatas", "Efesios", "Filipenses", "Colossences", "Tessalonicences", "Timoteo", "Tito", "Filemon", "Hebreus", "Tiago", "Pedro", "Judas", "Apocalipse"];

    const livro = Math.floor(Math.random() * livros.length);
    let livroAleatorio = livros[livro];

    const capitulos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const capitulo = Math.floor(Math.random() * capitulos.length);
    let capituloAleatorio = capitulos[capitulo];

    const versiculos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const versiculo = Math.floor(Math.random() * versiculos.length);
    let versiculoAleatorio = versiculos[versiculo];

    await fetch(`https://bible-api.com/${livroAleatorio}+${capituloAleatorio}:${versiculoAleatorio}?translation=almeida`)
        .then((res) => {
            res.json().then((data) => {

                let nome = data.reference;
                let verso = data.text

                if (data.reference || data.text) {
                    quoteText.innerText = verso;
                    authorText.innerText = nome;
                } else {
                    newQuote();
                    return
                }

                if (verso.length > 140) {
                    quoteText.classList.add('long-quote');
                } else {
                    quoteText.classList.remove('long-quote');
                }


                newQuoteBtn.addEventListener('click', newQuote);





            })
        }).catch((err) => alert("Epa!, Algo deu errado: " + err));

}

newQuote()

const whatsappBtn = document.getElementById('whats');

function whatsapp() {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${quoteText.textContent} ${authorText.textContent}`
    window.open(whatsappUrl, '_blank');
}

whatsappBtn.addEventListener('click', whatsapp);







































































































