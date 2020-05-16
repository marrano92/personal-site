import React from "react"
import '../styles/styles.scss'
import '../javascript/home.js'

//import Components
import Header from "../components/header";
import HomeIntro from "../components/Home/intro"
import About from "../components/Home/about";

const IndexPage = () => (
    <div>
        <Header />
        <HomeIntro />
        <About />
        <a href="#home" className="topLink animate__animated animate__fadeInRight">
            UP
        </a>
    </div>
)

export default IndexPage
