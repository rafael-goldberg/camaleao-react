import React from "react";

const HomeContentBg = () => {
    return(
        <div className="container" style={{paddingBottom:'80px'}}>
            <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                    <h1 className="fw-light">Fixed Full Page Background Image</h1>
                    <p className="lead">In this snippet, the background image is fixed to the body element. Content
                        on the page will
                        scroll, but the image will remain in a fixed position!</p>
                    <p className="lead">Scroll down...</p>
                    <div/>
                    <p className="lead mb-0">You've reached the end!</p>
                </div>
            </div>
        </div>
    )
}
export default HomeContentBg;
