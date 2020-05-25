import React from "react"
import {Link} from "gatsby"

const Topbar = () => {
    return (
        <div className="appHeader p-fixed">
            <Link to="/" className="logoMenu animate__animated animate__fadeIn">
                AM
            </Link>
            <div className="container topBar">
                <Link to="/" className="homeLink">
                   Andrea Marrano
                </Link>
                <div id="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
