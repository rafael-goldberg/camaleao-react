import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";

function Chevron(props) {
    return (
        <span className={props.className}>
            <i className="fa fa-caret-down"/>
        </span>
    );
}

const AccordionSidebar = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    return(
        <div className="accordion__section">
            <Link to='/' data-toggle="collapse" className={`pointer ${setActive}`} onClick={toggleAccordion}>
                {props.title ? props.title : 'Dropdown'}
                <Chevron className={`${setRotate} float-end me-2`} width={8} fill={"#777"} />
            </Link>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
                {props.children}
            </div>
        </div>
    )
}
export default AccordionSidebar;
