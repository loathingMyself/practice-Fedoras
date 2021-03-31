const headerImg = document.querySelectorAll('.header__image')

const hoverOpacity = (main, secondary) => {
    main.addEventListener('mouseenter', () => secondary.style.opacity = .5)
    main.addEventListener('mouseleave', () =>  secondary.style.opacity = 1)
    secondary.addEventListener('mouseenter', () => main.style.opacity = .5)
    secondary.addEventListener('mouseleave', () =>  main.style.opacity = 1)
}

hoverOpacity(headerImg[0], headerImg[1])


const justLearnMore = document.querySelectorAll('button')

for (let i = 0; i < 2; i++) {
    justLearnMore[i].addEventListener('click', () => alert('Just learn more!'))
}



const gridColumns = document.querySelectorAll('.styles__column')

gridColumns[1].style.marginTop = '80px'
gridColumns[3].style.marginTop = '80px'



const add = (el) => el.classList.remove('hidden')
const remove = (el) => el.classList.add('hidden')
const hiding = (el) => el.classList.add('hiding')
const notHiding = (el) => el.classList.remove('hiding')


const moreButton = document.querySelectorAll('.styles__more')
const additionalContent = document.querySelector('.styles__grid-additional')
const card = document.querySelectorAll('.styles__card')

const toggler = (open, close, content) => {

    open.addEventListener('click', () => {
        remove(open)
        add(close)
        add(content)
    })

    close.addEventListener('click', () => {
        hiding(content)
        hiding(close)
        card[3].scrollIntoView({
            behavior: 'smooth',
        })

        setTimeout(() => {
            remove(content)
            notHiding(content)
            notHiding(close)
            remove(close)
            add(open)
        }, 700)
    })
}
toggler(moreButton[0], moreButton[1], additionalContent)


const form = document.querySelector('.newsletter__form')
const sended = document.querySelector('.newsletter__resend')
const resend = document.querySelector('.newsletter__resend-b')

const formBehaviour = (main, sended, resend) => {
    main.addEventListener('submit', (e) => {
        e.preventDefault()
        hiding(main)
        setTimeout(() => {
            main.style.opacity = 0
            alert(`Your mail is ${main[0].value} btw`)
            main.reset()
        }, 700)
        add(sended)
    })
    resend.addEventListener('click', () => {
        hiding(sended)
        notHiding(main)

        setTimeout(() => {
            remove(sended)
            notHiding(sended)
            add(main)
            main.style.opacity = 1
        }, 700)
    })
}
formBehaviour(form, sended, resend)