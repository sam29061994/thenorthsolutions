import React, { Component } from "react";
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';
class About extends Component{
    render(){
        let title = 'WE KNOW THAT EVERY COMPANY AND ROLE IS UNIQUE.',
        description = 'We find the talent that no one else can. With recruiters based in Vancouver, Edmonton, Winnipeg and Toronto, we uncover top talent across Canada through dedicated headhunting and talent sourcing. ',
        description2 = 'Our Recruitment Consultants focus on a specialty area, so they truly understand the roles and challenges in your industry. We leverage cutting-edge workstyle assessments to take the guesswork out of finding the right fit, which means stronger hiring decisions and lower turnover for your team.';

        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about-1.jpeg" alt="About Images"/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <div className="icon">
                                            <FiSend />
                                        </div>
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                        <p className="description">{description2}</p>
                                        {/* <div className="purchase-btn">
                                            <Link className="btn-transparent" to="/">PURCHASE IMROZ</Link>
                                        </div> */}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;