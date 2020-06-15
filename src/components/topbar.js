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
        document.querySelector('.menuDiv').classList.toggle('d-none');
    }

    return (
        <div className="appHeader container pl-0 pr-6 pt-0 lg:pl-10 lg:pr-10 xl:pl-20 xl:pr-20 xl:pt-10 md:pt-10 md:pl-8 md:pr-8 max-w-full">
            <Link to="/" className="logoMenu lg:ml-10 lg:mt-10 xl:ml-20 xl:mt-10 md:ml-8 md:mt-10 animate__animated animate__fadeIn">
                AM
            </Link>
            <div className="topBar">
                <Link to="/" className="homeLink md:pl-20 lg:pl-20 xl:pl-20 ">
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
