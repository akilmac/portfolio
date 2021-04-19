import React from 'react';
import jumble from "../2021-04-15 (2).png";
import HyperComics from "../Hyper+Logo.png"

//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


export const Portfolio = () => {
    //jumble
    const openPopupboxJumble = () => {
        const content = (
            
            <>
            <img className="portfolio-image-popupbox" src={jumble} alt="Jumble project"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos?</p>
            <b>Jumble:</b> <a className="hyper-link" onClick={() => window.open("https://jumble.team/")}>https://jumble.team/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigJumble = {
        titleBar: {
            enable: true,
            text: "Project"
        },
        fadeIn: true,
        fadeInSpeed: 500,


    }

    //HyperComics
    const openPopupboxHyperComics = () => {
        const content = (
            
            <>
            <img className="portfolio-image-popupbox" src={HyperComics} alt="Hyper Comics project"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quos?</p>
            <b>Hyper Comics:</b> <a className="hyper-link" onClick={() => window.open("https://hypercomics.club/")}>https://hypercomics.club/</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigHyperComics = {
        titleBar: {
            enable: true,
            text: "Project"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
            <div className="image-box-wrapper row justify-content-center">                
                    <div className="portfolio-image-box" onClick={openPopupboxJumble}>
                    <img className="portfolio-image" src={jumble} alt="Jumble project"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                
                </div>
                {/* - */}
                
                <div className="portfolio-image-box" onClick={openPopupboxHyperComics}>
                    <img className="portfolio-image" src={HyperComics} alt="Hyper Comics project"/>
                    <div className="overflow-hype"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                
                </div>
                {/* - */}
                
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={jumble} alt="Jumble project"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                
                </div>
                {/* - */}
                
                <div className="portfolio-image-box">
                    <img className="portfolio-image" src={jumble} alt="Jumble project"/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigJumble} />
            <PopupboxContainer {...popupboxConfigHyperComics} />
        </div>
    )
}

export default Portfolio
