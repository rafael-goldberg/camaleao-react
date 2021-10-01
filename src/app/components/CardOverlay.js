import React from "react";

const CardOverlay = () => {
    return(
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark shadow-sm" style={{backgroundImage: `url('unsplash-photo-1.jpg')`}}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h4 className="mb-4 lh-1 fw-bold">Short title, long jacket</h4>
                <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                        <img src="https://via.placeholder.com/50x50/c5c5c5/000000" alt="Bootstrap" width="32"
                             height="32" className="rounded-circle border border-white"/>
                    </li>
                    <li className="d-flex align-items-center me-3">
                        <i className="bi bi-geo-fill me-2" width="1em" height="1em"/>
                        <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                        <i className="bi bi-calendar3 me-2" width="1em" height="1em"/>
                        <small>3d</small>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardOverlay;
