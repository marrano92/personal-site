import React from "react"

const Portfolio = () => {
    const projects = [
        {
            title: ' Drivek.it',
            anno: '2019 - in progress',
            azienda: 'Motork',
            ruolo: 'Backend developer',
        },
        {
            title: 'Lorenzodardano.com',
            anno: '2017 - 2018',
            azienda: 'Freelance',
            ruolo: 'Backend developer',
        },
        {
            title: 'Startupitalia.it',
            anno: '2017 - 2019',
            azienda: 'StartupItalia',
            ruolo: 'Full Stack developer',
        },
    ];

    return (
        <div className="container grid portfolio pb-40 lg:pb-8 xl:pb-40 md:pl-8 md:pr-8 largeContainer">
            <div className="section-heading  text-left
                 mt-16
                 md:mt-48
                 lg:mt-56
                 xl:mt-56">
                <h2 className="title-portfolio">I progetti
                    <br></br>
                    in cui ho lavorato</h2>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {projects.map((value, index) => {
                    return <div id="drivek" className="project-div
                mb-8 pt-6 pl-8 pr-8 pb-10
                sm:mb-8 sm:pt-6 sm:pl-8 sm:pr-8 sm:pb-10
                md:mb-8 md:pt-8 md:pl-10 md:pr-10 md:pb-12
                ">
                        <a className="workGrid__link" href="https://davidhellmann.com/work/auto-raum-zeit-salzburg">
                            <h3 className="workGrid__headline">{value.title}</h3>
                            <div className="section__subline">
                                <ul className="section__sublineList">
                                    <li className="section__sublineListItem mt-4 md:mt-4">
                                        <span>Anno - </span> {value.anno}
                                    </li>
                                    <li className="section__sublineListItem">
                                        <span>Azienda - </span> {value.azienda}
                                    </li>
                                    <li className="section__sublineListItem">
                                        <span>Ruolo - </span> {value.ruolo}
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                })}
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
