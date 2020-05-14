import React from "react"
import {Link} from "gatsby"

const Topbar = () => {
    return (
        <div className="appHeader">
            <Link to="/" className="logoMenu">
                AM
            </Link>
            <div className="container">
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
