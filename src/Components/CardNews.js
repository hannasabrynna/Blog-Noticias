class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }

    build() {
        const componentRoot = document.createElement("div"); //pega um elemento html que já existe, nesse caso a <div>
        componentRoot.setAttribute("class", "card"); //seta um atributo (nesse caso class) e nomeia (card) 
        // É o mesmo que : <div class="card">         
        // Card Left - Informações sobre a noticia
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        cardLeft.appendChild(autor); //Torna o span (const autor) filho da classe cardLeft

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")
        cardLeft.appendChild(linkTitle);

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")
        cardLeft.appendChild(newsContent);


        // Card Right - imagem da noticia
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("photo") || "assets/img/defaultImg.png"
        newsImg.alt = "Imagem da noticia" //alt e src são atributos ja existentes para um elemento img
        cardRight.appendChild(newsImg);

        // "pendura" as div's cardLeft e cardRight na div principal card
        // Elas são filhas da div card
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }


    style() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 800px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: gray;
            border-radius: 10px;
            padding: 1%;
        }
        
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > a {
            text-decoration: none;
            color: black;
            font-weight: 700;
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card__left > p {
            color: white;
        }
        
        .card__left span {
            font-weight: 400;
        }
        `;

        return style;
    }
}

// Define como se chamara nosso componente
customElements.define('card-news', CardNews);