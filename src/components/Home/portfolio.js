import React from "react"
import Image1 from "../../images/1.png"
import Image2 from "../../images/2.png"
import Image3 from "../../images/3.png"

const Portfolio = () => {

    return (
        <div className="container  pb-40 lg:pb-8 xl:pb-40 md:pl-8 md:pr-8 md:pt-16 largeContainer">
            <div className="section-heading text-center">
                <h2>Progetti</h2>
                <div className="description_portfolio">
                    <p>Lavoro con diversi Linguaggi di programmazione, diversi software e diversi framework,
                        qui sotto trovate un piccolo elenco di quelli che utilizzo più spesso. </p>
                </div>
            </div>
            <div
                className="titleSoftware grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">Stranger Things</div>
                </div>
                <div className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">Stranger Things</div>
                </div>
                <div className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">Stranger Things</div>
                </div>
                <div className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">Stranger Things</div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
