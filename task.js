const reveals = document.querySelectorAll('.reveal')

reveals.forEach((reveal) => {
    function isVisible(el_) {
        const {top, bottom} = reveal.getBoundingClientRect()
        if (bottom < 0) {
            return false
        }
        if (top > window.innerHeight) {
            return false
        }
        return true
    }

    document.addEventListener('scroll', (e) => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    })
})