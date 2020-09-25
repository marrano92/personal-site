import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const Portfolio = () => (
    <Layout>
        <main role="main">
            {/* Slider */}
            <section className="velo-slides" data-velo-slider="on" data-velo-theme="light">
                {/* Slide */}
                <section className="velo-slide">
                    {/* Pretitle Hint */}
                    <span className="velo-slider__hint"><span><span>Check Them Bldgs</span></span></span> {/* Slide BG */}
                    <div className="velo-slide__bg">
                        {/* Borders */}
                        <span className="border"><span /></span> {/* Img */}
                        <figure className="velo-slide__figure" style={{backgroundImage: 'url(https://source.unsplash.com/VsBl5PwVZpY/2000x1200)'}} />
                    </div>
                    {/* Header */}
                    <header className="velo-slide__header">
                        <h3 className="velo-slide__title"><span className="oh"><span>The Name Is</span></span><span className="oh"><span>Stephen Scaff</span></span></h3>
                        <p className="velo-slide__text"><span className="oh"><span>I'm a Creative Developer currently building web things at the Seattle Branding + Interactive firm, Urban Influence.</span></span></p>
                        <span className="velo-slide__btn"><a className="btn-draw btn--white" href="#"><span className="btn-draw__text"><span>View Work</span></span></a></span>
                    </header>
                </section>
                {/* Slide */}
                <section className="velo-slide">
                    {/* Pretitle Hint */}
                    <span className="velo-slider__hint"><span><span>What's up Playas</span></span></span>
                    {/* Slide BG */}
                    <div className="velo-slide__bg">
                        {/* Borders */}
                        <span className="border"><span /></span> {/* Img */}
                        <figure className="velo-slide__figure" style={{backgroundImage: 'url(https://source.unsplash.com/D8GFCYxyJj8/2000x1200)'}} />
                    </div>
                    {/* Header */}
                    <header className="velo-slide__header">
                        <h3 className="velo-slide__title"><span className="oh"><span>Another Day</span></span><span className="oh"><span>Another Slide</span></span></h3>
                        <p className="velo-slide__text"><span className="oh"><span>The here slider interaction thing is using Velocity for ehanced animation performance.</span></span></p>
                    </header>
                </section>
                {/* Slide - with Video */}
                <section className="velo-slide">
                    {/* Pretitle Hint */}
                    <span className="velo-slider__hint"><span><span>Urban Influence</span></span></span>
                    {/* Slide BG */}
                    <div className="velo-slide__bg">
                        {/* Borders */}
                        <span className="border"><span /></span> {/* Img */}
                        <figure className="velo-slide__figure" style={{backgroundImage: 'url()'}} />
                        <div className="velo-slide__vid-wrap">
                            <video autoPlay className="velo-slide__vid" loop poster>
                                <source src="http://uiclients.com/assets/videos/ui-chaun.mp4" type="video/mp4" /> Wait, are you still using IE? Bruv. Go get Chrome, or kick rocks.</video>
                        </div>
                    </div>{/* Header */}
                    <header className="velo-slide__header">
                        <h3 className="velo-slide__title"><span className="oh"><span>Pigeon Wisdom</span></span><span className="oh"><span>Agency Site</span></span></h3>
                        <p className="velo-slide__text"><span className="oh"><span>Live from the Coop, SOTD rocking, folio and storytelling joint for the Pigeon Wizzy squad. Coo Coo Mfers.</span></span></p>
                        <span className="velo-slide__btn"><a className="btn-draw btn--white" href="#"><span className="btn-draw__text"><span>View Project</span></span></a></span>
                    </header>
                </section>
                {/* Slides Nav */}
                <nav className="velo-slides-nav">
                    <ul className="velo-slides-nav__list">
                        <li>
                            <a className="js-velo-slides-prev velo-slides-nav__prev inactive" href="#0"><i className="icon-up-arrow" /></a>
                        </li>
                        <li>
                            <a className="js-velo-slides-next velo-slides-nav__next" href="#0"><i className="icon-down-arrow" /></a>
                        </li>
                    </ul>
                </nav>
            </section>
        </main>
    </Layout>
)

export default Portfolio
