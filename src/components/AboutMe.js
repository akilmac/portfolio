import React from "react";
import author from "../Screenshot_20200621-092431_Photos (3).jpg";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel sequi possimus eius molestiae quia nemo, atque quod dolore repudiandae consequatur enim. Repellendus aspernatur harum sequi dignissimos illo est! Quia!</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
