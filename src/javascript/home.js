window.addEventListener('scroll', function () {
    let scrollpos = window.scrollY
    const topLink = document.querySelector(".topLinkDiv")
    const header_height = 600;

    const add_class_fade_out = () => topLink.classList.add("animate__fadeOutRight")
    const add_class_fade_in = () => topLink.classList.add("animate__fadeInRight")
    const remove_class_d_none_scroll = () => topLink.classList.remove("d-none")
    const remove_class_fade_out = () => topLink.classList.remove("animate__fadeOutRight")
    const remove_class_fade_in = () => topLink.classList.remove("animate__fadeIntRight")

    scrollpos = window.scrollY;
    if (scrollpos >= header_height) {
        remove_class_fade_out()
        add_class_fade_in()
        remove_class_d_none_scroll()
    } else {
        remove_class_fade_in()
        add_class_fade_out()
    }
})


