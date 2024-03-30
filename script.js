const headerLink = document.querySelectorAll('a.header-link')
const pageUrl = window.location.href

headerLink.forEach((link) => {
    if (link.href === pageUrl) {
        link.classList.add('header-active')
    }
})