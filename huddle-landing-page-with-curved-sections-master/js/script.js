const boxes = document.querySelectorAll('.box')
const features = document.querySelectorAll('.wrapper')
const cta = document.querySelector('.cta')
const footer = document.querySelector('.footer')

const observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return
        entry.target.classList.remove('appear')
        observer.unobserve(entry.target)
        console.log(entry.target)
    })},
    {
        root: null,
        threshold: .2,
    }
)


boxes.forEach( box => {
    observer.observe(box)
})
features.forEach( feature => {
    observer.observe(feature)
})

observer.observe(cta)
observer.observe(footer)

