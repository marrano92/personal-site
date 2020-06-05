import React from "react"
import {Link} from "gatsby"

const Topbar = () => {
    function openMenu(){
        const isActive =  document.querySelector('body').classList.contains('bodyBlock');
        if (isActive) {
            document.querySelector('body').classList.remove('bodyBlock');
        }else {
            document.querySelector('body').classList.toggle('bodyBlock');
        }

        document.querySelector('#nav-icon').classList.toggle('open');
        document.querySelector('.menuDiv').classList.toggle('is-none');
    }

    return (
        <div className="appHeader container pl-20 pr-20 max-w-full">
            <Link to="/" className="logoMenu animate__animated animate__fadeIn">
                AM
            </Link>
            <div className="topBar">
                <Link to="/" className="homeLink">
                   Andrea Marrano
                </Link>
                <div id="nav-icon" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
