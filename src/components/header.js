import React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import IconSocial from "./IconSocial"

import Image1 from "../images/home.webp"
import ImageAbout from "../images/about.webp"
import ImageSkills from "../images/skill.webp"
import ImageProject from "../images/projects.webp"
import ImageContact from "../images/contact.webp"

const Header = () => {
    const elements = [
        {
            title: "Home",
            image: Image1,
            path: "/",
            class: "menu__item-img c-glitch imageHome",
        },
        {
            title: "Chi sono",
            image: ImageAbout,
            path: "/about",
            class: "menu__item-img c-glitch imageAbout",
        },
        {
            title: "Skills",
            image: ImageSkills,
            path: "/skills",
            class: "menu__item-img c-glitch imageMenuSkills",
        },
        {
            title: "Portfolio",
            image: ImageProject,
            path: "/portfolio",
            class: "menu__item-img c-glitch imageMenuWork",
        },
        {
            title: "Contatti",
            image: ImageContact,
            path: "/contact",
            class: "menu__item-img c-glitch imageMenuContact",
        },
    ]

    const menuItems = []

    for (const [index, value] of elements.entries()) {
        menuItems.push(
            <div className="menu__item animate__animated animate__fadeInUp">
                <Link to={value.path} className="menu__item-link">{value.title}</Link>
                <div className={value.class} style={{backgroundImage: 'url(' + value.image + ')'}}>
                    <div className="c-glitch__img" style={{backgroundImage: 'url(' + value.image + ')'}}/>
                    <div className="c-glitch__img" style={{backgroundImage: 'url(' + value.image + ')'}}/>
                    <div className="c-glitch__img" style={{backgroundImage: 'url(' + value.image + ')'}}/>
                    <div className="c-glitch__img" style={{backgroundImage: 'url(' + value.image + ')'}}/>
                    <div className="c-glitch__img" style={{backgroundImage: 'url(' + value.image + ')'}}/>
                </div>
                <div className="marquee">
                    <div className="marquee__inner" aria-hidden="true">
                        <span>{value.title}</span>
                        <span>{value.title}</span>
                        <span>{value.title}</span>
                        <span>{value.title}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <header className="container max-w-full">
            <main>
                <div className="menuDiv animate__animated animate__fadeInDown d-none">
                    <nav
                        className="menu container pl-2 pr-2 pt-4 pb-6 md:pl-10 xs:pl-2 lg:pl-14 xl:pl-16 xl:pt-24 xl:ml-24">
                        {menuItems}
                    </nav>
                    <IconSocial/>
                </div>
                <TopBar/>
            </main>
        </header>
    )
}

export default Header
