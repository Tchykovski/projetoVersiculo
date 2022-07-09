const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loadingitem = document.getElementById('loading');

loadingitem.classList.add('removedisplay');



var versiculos = [
    {
        reference: "João 3:16",
        verse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
    },
    {
        reference: "Salmos 103:8",
        verse: "Misericordioso e piedoso é o Senhor ; longânimo e grande em benignidade."
    },
    {
        reference: "Gálatas 2:20",
        verse: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne, vivo-a pela fé do Filho de Deus, o qual me amou, e se entregou a si mesmo por mim."
    },
    {
        reference: "Mateus 28:19-20",
        verse: "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo, ensinando-os a obedecer a tudo o que eu lhes ordenei. E eu estarei sempre com vocês, até o fim dos tempos."
    },
    {
        reference: "Mateus 6:33",
        verse: "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas."
    },
    {
        reference: "Filipenses 4:7",
        verse: "E a paz de Deus, que excede todo o entendimento, guardará os seus corações e as suas mentes em Cristo Jesus."
    },
    {
        reference: "Jeremias 29:11",
        verse: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro."
    },
    {
        reference: "João 14:6",
        verse: 'Respondeu Jesus: "Eu sou o caminho, a verdade e a vida.Ninguém vem ao Pai, a não ser por mim".'
    },
    {
        reference: "João 16:33",
        verse: "Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo."
    },
    {
        reference: "Provérbios 3:5",
        verse: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento."
    },
    {
        reference: "Salmos 23:1",
        verse: "O Senhor é o meu pastor; e nada me faltará."
    },
    {
        reference: "Mateus 19:6",
        verse: "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe."
    },
    {
        reference: "Romanos 8:31",
        verse: "Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós?"
    },
    {
        reference: "Mateus 6:34",
        verse: "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal."
    },
    {
        reference: "Filipenses 4:13",
        verse: "Tudo posso naquele que me fortalece."
    },
    {
        reference: " João 8:32",
        verse: "Conhecereis a verdade, e a verdade os libertará"
    },
    {
        reference: "1 Timóteo 1:17",
        verse: "Ao Rei eterno, o Deus único, imortal e invisível, sejam honra e glória para todo o sempre. Amém."
    },
    {
        reference: "Salmo 119:105",
        verse: "Lâmpada para os meus pés é a tua palavra e, luz para o meu caminho"
    },
    {
        reference: " Isaías 6:3",
        verse: "Santo, santo, santo é o Senhor dos Exércitos, a terra inteira está cheia da sua glória."
    },
    {
        reference: "Josué 24:15",
        verse: "Eu e a minha casa serviremos ao Senhor. "
    },
]






function newQuote() {
    let versiculoAleatorio = versiculos[Math.floor(Math.random() * versiculos.length)];
    quoteText.innerHTML = versiculoAleatorio.verse;
    authorText.innerHTML = versiculoAleatorio.reference;
}

newQuote();


function loadingscreen() {
    newQuoteBtn.classList.add('removedisplay');
    loadingitem.classList.remove('removedisplay');

    setTimeout(() => {
        newQuoteBtn.classList.remove('removedisplay');
        loadingitem.classList.add('removedisplay');
    }, 300);

}

newQuoteBtn.addEventListener('click', newQuote);
newQuoteBtn.addEventListener('click', loadingscreen);



const whatsappBtn = document.getElementById('whats');

function whatsapp() {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${quoteText.textContent} ${authorText.textContent}`
    window.open(whatsappUrl, '_blank');
}

whatsappBtn.addEventListener('click', whatsapp);







































































































