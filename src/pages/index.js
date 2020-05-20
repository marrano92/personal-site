import React from "react"
import '../styles/styles.scss'
import '../javascript/home.js'

//import Components
import Header from "../components/header";
import HomeIntro from "../components/Home/intro"
import About from "../components/Home/about";

const IndexPage = () => (
    <div>
        <Header/>
        <HomeIntro/>
        <About/>
        <div className="div_spaze"></div>
        <a className="topLink" href="#home">
            <div className="topLinkDiv animate__animated animate__fadeInRight">
                <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/>
                </svg>
                <span>UP</span>
            </div>
        </a>
    </div>
)

export default IndexPage
