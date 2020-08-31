import React from "react"
import Image1 from "../../images/1.png"
import Image2 from "../../images/2.png"
import Image3 from "../../images/3.png"

const Portfolio = () => {

    return (
        <div className="container portfolio pb-40 lg:pb-8 xl:pb-40 md:pl-8 md:pr-8 md:pt-16 largeContainer">
            <div className="section-heading text-center">
                <h2>Progetti</h2>
                <div className="description_portfolio">
                    <p>Ecco un elenco dei progetti più importanti su cui ho lavorato.</p>
                </div>
            </div>
            <div className="titleSoftware grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                <div  id="drivek" className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">drivek.it</div>
                </div>
                <div id="lorenzo-dardano" className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">lorenzodardano.com</div>
                </div>
                <div id="belvedere" className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">hotelilbelvedere.com</div>
                </div>
                <div id="startupitalia" className="card mb-8 sm:mb-8 md:mb-8">
                    <div className="title-project">startupitalia.eu</div>
                </div>
            </div>
            <button className="button ">
                Scopri di più
                <div className="button__horizontal"></div>
                <div className="button__vertical"></div>
            </button>
        </div>
    )
}

export default Portfolio
