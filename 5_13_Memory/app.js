const cards = [
    {
        name: '1',
        img: 'image/d_1.png'
    },
    {
        name: '2',
        img: 'image/d_2.png'
    },
    {
        name: '3',
        img: 'image/d_3.png'
    },
    {
        name: '4',
        img: 'image/d_4.png'
    },
    {
        name: '5',
        img: 'image/d_5.png'
    },
    {
        name: '6',
        img: 'image/d_6.png'
    },
    {
        name: '1',
        img: 'image/d_1.png'
    },
    {
        name: '2',
        img: 'image/d_2.png'
    },
    {
        name: '3',
        img: 'image/d_3.png'
    },
    {
        name: '4',
        img: 'image/d_4.png'
    },
    {
        name: '5',
        img: 'image/d_5.png'
    },
    {
        name: '6',
        img: 'image/d_6.png'
    }
];

document.addEventListener("DOMContentLoaded",() => {
    cards.sort(() => 0.5 - Math.random());
    const grid = document.querySelector(".grid");
    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            const card = document.createElement("img");
            card.setAttribute("src","image/hidden_card.png");
            card.setAttribute("data-id",i);
            card.addEventListener("click",flipCard);
            grid.appendChild(card);
        }
    }
    function flipCard(){
        let cardId = this.getAttribute("data-id");
        this.setAttribute("src",cards[cardId].img);
    }
    createBoard();
});