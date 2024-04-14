const btn = document.querySelector('.btn')
const popup = document.querySelector('.popup')
const cancelBtn = document.querySelector('.submit')

btn.addEventListener('click', showPopup)
cancelBtn.addEventListener('click', hidePopup)

function showPopup() {
    popup.classList.add('show')
}

function hidePopup() {
    popup.classList.remove('show')
}