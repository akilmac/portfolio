import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    FacebookShareButton,
    FacebookIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Lancaster, Ca 93536</p>
                        </div>
                        <div className="d-flex">
                            <a href="661-341-5534">+1(661)341-5534</a>
                        </div>
                        <div className="d-flex">
                            <p>akilmac@hotmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                                url={"https://jumble.team/about"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                            <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <TwitterShareButton
                                url={"https://jumble.team/about"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                            <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://jumble.team/about"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                            <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <FacebookShareButton
                                url={"https://jumble.team/about"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                            <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Akil Mcelhannon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Footer
