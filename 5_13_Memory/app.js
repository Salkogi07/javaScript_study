const cards = [
    {
        name: '1',
        img: 'image/다이아몬드_A.png'
    },
    {
        name: '2',
        img: 'image/다이아몬드_2.png'
    },
    {
        name: '3',
        img: 'image/다이아몬드_3.png'
    },
    {
        name: '4',
        img: 'image/다이아몬드_4.png'
    },
    {
        name: '5',
        img: 'image/다이아몬드_5.png'
    },
    {
        name: '6',
        img: 'image/다이아몬드_6.png'
    },
    {
        name: '1',
        img: 'image/다이아몬드_A.png'
    },
    {
        name: '2',
        img: 'image/다이아몬드_2.png'
    },
    {
        name: '3',
        img: 'image/다이아몬드_3.png'
    },
    {
        name: '4',
        img: 'image/다이아몬드_4.png'
    },
    {
        name: '5',
        img: 'image/다이아몬드_5.png'
    },
    {
        name: '6',
        img: 'image/다이아몬드_6.png'
    },
    {
        name: 'back',
        img: 'image/hidden_card.png'
    },
    {
        name: 'white',
        img: 'image/white_card.png'
    }
]

document.addEventListener("DOMContentLoaded",() => {
    cards.sort(() => 0.5 - Math.random());
    const grid = document.querySelector(".grid");
    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            const card = document.createElement("img");
            card.setAttribute("src",cards[i].img);
            card.setAttribute("data-id",i);
            grid.appendChild(card);
        }
    }
})