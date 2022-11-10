const barsItem = document.getElementById('bars-item')
const barsButton = document.getElementById('bars-button')
const overlay = document.getElementById('overlay')
const faqContent = document.getElementById('faq-content')
const faqItem = document.getElementById('faq-item')
const faqPlus = document.getElementById('faq-plus')
const faqMinus = document.getElementById('faq-minus')


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

faqPlus.addEventListener('click', () => {
    faqContent.classList.remove('hidden')
    faqPlus.classList.add('hidden')
    faqMinus.classList.remove('hidden')
    faqItem.classList.add('faq__item2')
    faqItem.classList.remove('faq__item1')
})

faqMinus.addEventListener('click', () => {
    faqContent.classList.add('hidden')
    faqPlus.classList.remove('hidden')
    faqMinus.classList.add('hidden')
    faqItem.classList.remove('faq__item2')
    faqItem.classList.add('faq__item1')
})