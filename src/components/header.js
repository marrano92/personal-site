import React from "react"
import {Link} from "gatsby"
import TopBar from "./topbar"
import IconSocial from "./IconSocial"

import Image1 from "../images/home.jpg"
import Image2 from "../images/2.jpg"
import Image3 from "../images/3.jpg"


const Header = () => {
    const elements = [
        {
            title: "Home",
            image: Image1,
            path: "/",
        },
        {
            title: "About Me",
            image: Image2,
            path: "/about-me",
        },
        {
            title: "Contact Me",
            image: Image3,
            path: "/contact-me",
        },
    ]

    const menuItems = []

    for (const [index, value] of elements.entries()) {
        menuItems.push(
            <div className="menu__item">
                <Link to={value.path} className="menu__item-link">{value.title}</Link>
                <img className="menu__item-img" src={value.image} alt="Some"/>
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
