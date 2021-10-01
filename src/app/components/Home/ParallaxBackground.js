import React from "react";
import {Parallax} from "react-parallax";

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const ParallaxBackground = () => {
    return(
        <Parallax bgImage={"https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg"} strength={-300}>
            <div style={{ height: 500 }}>
                <div style={insideStyles}>Reverse direction</div>
            </div>
        </Parallax>
    )
}
export default ParallaxBackground;
