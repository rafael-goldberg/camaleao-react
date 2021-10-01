import React, {useState} from 'react';
import LayoutSite from "../layouts/LayoutSite";
import '../../assets/css/Contact.css';
import Container from "../components/Container";

const Contact = () => {
    const [state] = useState({
        bg_on_off: false,
    });

    return (
        <LayoutSite state={state}>
            <Container id="contact">
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-envelope"/></div>
                        <h1 className="fw-bolder">Get in touch</h1>
                        <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-lg-7">
                                    <form id="contact-form" className="form-horizontal" role="form">
                                        <div className="form-floating mb-3">
                                            <input type="name" className="form-control" id="name" placeholder="Your name" autoComplete="off"/>
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="email" placeholder="Your e-mail" autoComplete="off"/>
                                            <label htmlFor="email">Your E-mail</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Leave a message here"
                                                  id="message" style={{height:'100px'}}/>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                            <div className="alt-send-button">
                                                <i className="fa fa-paper-plane"/><span className="send-text">SEND</span>
                                            </div>
                                        </button>
                                    </form>
                                </div>
                                <div className="col-lg-5">
                                    <div className="direct-contact-container">
                                        <ul className="contact-list">
                                            <li className="list-item">
                                                <i className="fas fa-map-marker fa-2x"/>
                                                <span className="contact-text place">City, State</span>
                                            </li>
                                            <li className="list-item">
                                                <i className="fas fa-phone fa-2x"/>
                                                <span className="contact-text phone">
                                            <span title="Give me a call">(212) 555-2368</span>
                                        </span>
                                            </li>

                                            <li className="list-item">
                                                <i className="fas fa-envelope fa-2x"/>
                                                <span className="contact-text email">
                                            <span title="Send me an email">hitmeup@gmail.com</span>
                                        </span>
                                            </li>

                                        </ul>
                                        <hr/>
                                        <ul className="social-media-list">
                                            <li><a href="#" target="_blank" className="contact-icon">
                                                <i className="fa fa-github" aria-hidden="true"/></a>
                                            </li>
                                            <li><a href="#" target="_blank" className="contact-icon">
                                                <i className="fa fa-codepen" aria-hidden="true"/></a>
                                            </li>
                                            <li><a href="#" target="_blank" className="contact-icon">
                                                <i className="fa fa-twitter" aria-hidden="true"/></a>
                                            </li>
                                            <li><a href="#" target="_blank" className="contact-icon">
                                                <i className="fa fa-instagram" aria-hidden="true"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                    <div className="col">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                            className="bi bi-chat-dots"></i></div>
                        <div className="h5 mb-2">Chat with us</div>
                        <p className="text-muted mb-0">Chat live with one of our support specialists.</p>
                    </div>
                    <div className="col">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                            className="bi bi-people"></i></div>
                        <div className="h5">Ask the community</div>
                        <p className="text-muted mb-0">Explore our community forums and communicate with other users.</p>
                    </div>
                    <div className="col">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                            className="bi bi-question-circle"></i></div>
                        <div className="h5">Support center</div>
                        <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                    </div>
                    <div className="col">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                            className="bi bi-telephone"></i></div>
                        <div className="h5">Call us</div>
                        <p className="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
                    </div>
                </div>
            </Container>
        </LayoutSite>
    );
}

export default Contact;
