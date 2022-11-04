const barsItem = document.getElementById('bars-item')
const barsButton = document.getElementById('bars-button')
const overlay = document.getElementById('overlay')


barsButton.addEventListener('click', () => {
    barsItem.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

overlay.addEventListener('click', () => {
    barsItem.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        barsItem.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})