import React from "react"

const Portfolio = () => {

    return (
        <div className="container grid portfolio pb-40 lg:pb-8 xl:pb-40 md:pl-8 md:pr-8 md:pt-16 largeContainer">
            <div className="section-heading text-left">
                <h2>Dai un'occhiata
                    <br></br>
                agli ultimi progetti</h2>
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
