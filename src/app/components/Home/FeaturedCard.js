import React, {useState} from "react";
import '../../../assets/css/Featured.css';
import {Link} from "react-router-dom";

const FeaturedCard = () => {
    const [state] = useState({
        features: [
            {id:1, icon:'bi bi-collection', title:'Fresh new layout', description:'With Bootstrap 5, we\'ve created a fresh new layout for this template!'},
            {id:2, icon:'bi bi-cloud-download', title:'Free to download', description:'As always, Start Bootstrap has a powerful collection of free templates.'},
            {id:3, icon:'bi bi-card-heading', title:'Jumbotron hero header', description:'The heroic part of this template is the jumbotron hero header!'},
            {id:4, icon:'bi bi-bootstrap', title:'Feature boxes', description:'We\'ve created some custom feature boxes using Bootstrap icons!'},
            {id:5, icon:'bi bi-code', title:'Simple clean code', description:'We keep our dependencies up to date and squash bugs as they come!'},
            {id:6, icon:'bi bi-patch-check', title:'A name you trust', description:'Start Bootstrap has been the leader in free Bootstrap templates since 2013!'},
        ]
    });

    return(
        <div className="row gx-lg-5">
            {state.features.length > 0 && state.features.slice(0,4).map(feature => {
                const {id} = feature;
                return(
                    <div className="feature col" key={id}>
                        <div className="feature-icon bg-primary bg-gradient">
                            <i className="bi bi-collection" width="1em" height="1em"/>
                        </div>
                        <h2>Featured title</h2>
                        {/*
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                            sentence and probably just keep going until we run out of words.</p>
                        */}
                        <Link to="/" className="icon-link">
                            Call to action
                            <i className="bi bi-chevron-right" width="1em" height="1em"/>
                        </Link>

                        {/*
                        <div className="col-lg-6 col-xl-4 mb-5" key={id}>
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                    <i className={icon}/>
                                </div>
                                <h2 className="fs-4 fw-bold">{title}</h2>
                                <p className="mb-0">{description}</p>
                            </div>
                        </div>
                    </div>
                    */}
                    </div>
                )
            })}
        </div>
    )
}
export default FeaturedCard;
