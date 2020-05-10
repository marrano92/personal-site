import React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import IconSocial from "./IconSocial"

import Image1 from "../images/home.jpg"
import ImageAbout from "../images/about.jpg"
import ImageSkills from "../images/skill.jpg"
import ImageProject from "../images/projects.jpg"
import ImageContact from "../images/contact.jpg"

const Header = () => {
    const elements = [
        {
            title: "Home",
            image: Image1,
            path: "/",
            class: "menu__item-img",
        },
        {
            title: "About",
            image: ImageAbout,
            path: "/about",
            class: "menu__item-img",
        },
        {
            title: "Skills",
            image: ImageSkills,
            path: "/skills",
            class: "menu__item-img imageMenuTop",
        },
        {
            title: "My work",
            image: ImageProject,
            path: "/my-work",
            class: "menu__item-img imageMenuMiddle",
        },
        {
            title: "Contact",
            image: ImageContact,
            path: "/contact",
            class: "menu__item-img imageMenuBottom",
        },
    ]

    const menuItems = []

    for (const [index, value] of elements.entries()) {
        menuItems.push(
            <div className="menu__item">
                <Link to={value.path} className="menu__item-link">{value.title}</Link>
                <img className={value.class} src={value.image} alt="Some"/>
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
        <header className="demo-1">
            <main>
                <TopBar/>
                <nav className="menu container">
                    {menuItems}
                </nav>
                <IconSocial/>
            </main>
        </header>
    )
}

export default Header
