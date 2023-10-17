const fut23cards = [
    Haaland = {
        id: 1,
        fooName: "Haaland",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Haaland.png"
    },
    Batshuayi = {
        id: 2,
        fooName: "Batshuayi",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Batshuayi.png"
    },
    Jorginho = {
        id: 3,
        fooName: "Jorginho",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Jorginho.png"
    },
    Kepa = {
        id: 4,
        fooName: "Kepa",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Kepa.png"
    },
    Mertens = {
        id: 5,
        fooName: "Mertens",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Mertens.png"
    },
    Livakovic = {
        id: 6,
        fooName: "Livakovic",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Livakovic.png"
    },
    Rodriguez = {
        id: 7,
        fooName: "Rodriguez",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Rodriguez.png"
    },
    Tadic = {
        id: 8,
        fooName: "Tadic",
        src: "/.Homeworks/FifaCardApp/FifaCardImg/Tadic.png"
    }
]
const fut_cards = document.querySelector('#fut-cards')
const btn = document.querySelector('#btn-to-open')
btn.addEventListener('click', addCards)


    function addCards(){
        for(const card of fut23cards){
            const imgDOM = document.createElement('img')
            imgDOM.src = card.src
            imgDOM.alt = card.fooName

            const div = document.createElement('div')
            div.appendChild(imgDOM)
            fut_cards.appendChild(div)
            
            div.classList.add('opened_imgs_div')
            imgDOM.classList.add('opened_imgs')
        }
    this.removeEventListener('click', addCards)
}