import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Welcome To Akil's Page</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Designs", "Web Development", "Software Engineering"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                 />
                 <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
