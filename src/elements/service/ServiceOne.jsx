import React, { Component } from "react";
import { FiGithub, FiTarget, FiFastForward } from "react-icons/fi";


const ServiceList = [
    {
        icon: <FiGithub />,
        title: 'TOP TALENT',
        description: 'Our extensive networking and innovative search techniques are in place to ensure North Solutions will help you hire and retain the greatest possible talent for your needs.'
    },
    {
        icon: <FiTarget />,
        title: 'PERSONALIZED EXPERIENCE',
        description: 'Every client has unique needs and goals. At North Solutions we customize our solutions and services to meet your requirements and ensure long-term success.'
    },
    {
        icon: <FiFastForward />,
        title: 'FORWARD THINKING',
        description: 'Building long-term, value-based relationships with our clients and candidates is our primary mission at North Solutions and effective communication is our key strength.'
    },
]
class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row row--25">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    {val.icon}
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;