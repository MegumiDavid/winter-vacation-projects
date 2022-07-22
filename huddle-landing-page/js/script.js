const cards = document.querySelectorAll('.card')
const cta = document.querySelector('.footer__cta-box')

const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        entry.target.classList.remove('appear')
        observer.unobserve(entry.target)
        console.log(entry.target)
    })},
    {
        root: null,
        threshold: .3,
    }
)

observer.observe(cta)
cards.forEach( c => {
    observer.observe(c)
})

