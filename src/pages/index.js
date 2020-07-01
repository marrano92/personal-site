import React from "react"
import '../styles/styles.scss'
import '../javascript/home.js'

//import Components
import Header from "../components/header";
import HomeIntro from "../components/Home/intro"
import About from "../components/Home/about";
import Software from "../components/Home/software";
import Portfolio from "../components/Home/portfolio";
const IndexPage = () => {

    return (
        <div>
            <Header/>
            <HomeIntro/>
            <About/>
            <Software/>
            <Portfolio/>
            <div className="image_profile"></div>
            <a className="topLink" href="#home">
                <div className="topLinkDiv animate__animated d-none">
                    <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                         clipRule="evenodd">
                        <path
                            d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
                    </svg>
                    <span>UP</span>
                </div>
            </a>
        </div>
    )
}

export default IndexPage
