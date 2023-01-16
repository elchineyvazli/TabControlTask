const tabButton1 = document.querySelector('.tabButton1')
const tabButton2 = document.querySelector('.tabButton2')
const tabButton3 = document.querySelector('.tabButton3')

const tabArea1 = document.querySelector('.tabArea1')
const tabArea2 = document.querySelector('.tabArea2')
const tabArea3 = document.querySelector('.tabArea3')

tabButton1.addEventListener('click', () => {
    tabArea1.style.display = "flex"
    tabArea2.style.display = "none"
    tabArea3.style.display = "none"
})

tabButton2.addEventListener('click', () => {
    tabArea2.style.display = "flex"
    tabArea1.style.display = "none"
    tabArea3.style.display = "none"
})

tabButton3.addEventListener('click', () => {
    tabArea3.style.display = "flex"
    tabArea2.style.display = "none"
    tabArea1.style.display = "none"
})