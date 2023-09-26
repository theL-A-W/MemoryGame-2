
document.addEventListener("DOMContentLoaded", () => {
// // const imageToDisplay = document.querySelector('#imageToDisplay')
// const button = document.querySelector('#getImagesButton')


// axios.get('https://api.unsplash.com/search/photos?query=animals&client_id=FRXSsWanrUHj9B2wvq288OTm2XYEMDHPUuHIuN1mkQI')

// .then(response => {
//     console.log(response)
// })


// button.addEventListener('click', async () => {

// let imageToDisplay = response.data.results[0].links.download
// let img1 = document.createElement('img')
// img1.setAttribute('class', 'imageToDisplay')
// img1.textContent  = 'First Image:' + imageToDisplay
// document.body.append(img1)
// }
// )
// //////////
// const img = $('#card1')
// const imageToDisplay = document.querySelector('.imageToDisplay')
// imageToDisplay.style.backgroundImage = `url(${img.src})`
// ////////

const imageArray = [
    img1 =  `https://media.istockphoto.com/id/1392163011/photo/cute-female-kitten-walking-towards-and-looking-in-the-camera-on-a-pink-background.webp?b=1&s=170667a&w=0&k=20&c=YA2ZIsdH9Qpah-nmbhOvsz9DP8pLJIJ19FUaYAPolM0=`,
     img1 = `https://media.istockphoto.com/id/1392163011/photo/cute-female-kitten-walking-towards-and-looking-in-the-camera-on-a-pink-background.webp?b=1&s=170667a&w=0&k=20&c=YA2ZIsdH9Qpah-nmbhOvsz9DP8pLJIJ19FUaYAPolM0=`,
    img2 = `https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
    img2 = `https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHB5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
    img3 = `https://media.istockphoto.com/id/184154297/photo/small-yellow-chickens-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=c_BLTOZ00XZ_XSK5SABhcUKmZ0lEimw8-rX7OsX-S8M=`,
    img3 =  `https://media.istockphoto.com/id/184154297/photo/small-yellow-chickens-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=c_BLTOZ00XZ_XSK5SABhcUKmZ0lEimw8-rX7OsX-S8M=`,
   img4 = `https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
    img4 = `https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
    img5 = `https://media.istockphoto.com/id/1330878548/photo/cute-calf-with-red-and-white-coat-large-big-eyes-and-pink-nose-lovely-and-innocent.webp?b=1&s=170667a&w=0&k=20&c=NkOzLjkV6ntL9aiFPLSSRWx9n5F5ku3IPCEtTLgUPWs=`,
    img5 = `https://media.istockphoto.com/id/1330878548/photo/cute-calf-with-red-and-white-coat-large-big-eyes-and-pink-nose-lovely-and-innocent.webp?b=1&s=170667a&w=0&k=20&c=NkOzLjkV6ntL9aiFPLSSRWx9n5F5ku3IPCEtTLgUPWs=`,
    img6 = `https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emVicmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`, 
    img6 = `https://images.unsplash.com/photo-1501706362039-c06b2d715385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emVicmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
    img7 = `https://images.unsplash.com/photo-1548506446-86bfddac5620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmFmZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
    img7 = `https://images.unsplash.com/photo-1548506446-86bfddac5620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmFmZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
    img8 = `https://media.istockphoto.com/id/165847424/photo/goat.webp?b=1&s=170667a&w=0&k=20&c=AJqrrmwgsCp03Iq5upV5hIpQv3krJjpF9ygeRcMgwp0=`,
    img8 = `https://media.istockphoto.com/id/165847424/photo/goat.webp?b=1&s=170667a&w=0&k=20&c=AJqrrmwgsCp03Iq5upV5hIpQv3krJjpF9ygeRcMgwp0=`,
    img9 = `https://images.unsplash.com/photo-1602847213180-50e43a80bef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoZWVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
    img9 = `https://images.unsplash.com/photo-1602847213180-50e43a80bef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNoZWVwfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60`,
    img10 = `https://images.unsplash.com/photo-1579822269843-3769559ce9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVja2xpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
    img10 = `https://images.unsplash.com/photo-1579822269843-3769559ce9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVja2xpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60`,
    img11 = `https://images.unsplash.com/photo-1555010133-d883506aedee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1aXJyZWwlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
    img11 = `https://images.unsplash.com/photo-1555010133-d883506aedee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3F1aXJyZWwlMjBmdW5ueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60`,
    img12 = `https://media.istockphoto.com/id/162136091/photo/kangaroo-posing-very-much-like-a-human.webp?b=1&s=170667a&w=0&k=20&c=UXGdXCFcNXlWhHppK6gxNvZC6oPehfrUn4CZrpUyywg=`,
    img12 = `https://media.istockphoto.com/id/162136091/photo/kangaroo-posing-very-much-like-a-human.webp?b=1&s=170667a&w=0&k=20&c=UXGdXCFcNXlWhHppK6gxNvZC6oPehfrUn4CZrpUyywg=`
]

function shuffleArray(array)  {
    for  (let i = array.length - 1; i >0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp  = array[i]
        array[i] = array[j]
        array[j]= temp

    }
}
shuffleArray(imageArray)

for (let i = 0; i < imageArray.length; i++) {
    const cardId = "card" + (i +1)
    const card= document.getElementById(cardId)
    card.style.backgroundImage = `url(${imageArray[i]})`
    card.style.backgroundRepeat = "no-repeat"
    card.style.backgroundSize = "cover"
}

let flippedCards  =  []
let cardLocked  = false

const cards = document.querySelectorAll('.card')

card.forEach((card, index) => {
    card.addEventListener('click', () => {
        if (cardLocked || card.style.backgroundImage != 'none') return

        card.style.backgroundImage =  `url(${imageArray[index]})`
        flippedCards.push({ card, image: imageArray[index] })

        if (flippedCards.length === 2) {
            cardLocked = true

            if (flippedCards[0].image === flippedCards[1].image) {

                flippedCards = []
                cardLocked = false
            } else {
                setTimeout(() => {
                    flippedCards.forEach(({ card }) => {
                        card.style.backgroundImage = ''
                    })
                    flippedCards = []
                    cardLocked = false
                }, 1000)
            }
        }
    })
})



// cards.forEach((card,index) => {
//     card.addEventListener('click', () => {
//         card.style.backgroundImage = `url(${imageArray[index]})`
//     })
// })

})






// let gridContainer = document.querySelector(".grid-container")
// let scoreBoard = document.querySelector(".scoreBoard")
// let popup = document.querySelector(".popup")
// let playAgain = document.querySelector(".playAgain")
// let clickBoard = document.querySelector(".clickBoard")
// let imgs
// let cardsId = []
// let cardsSelected = []
// let cardsWon = 0
// let clicks = 0s







