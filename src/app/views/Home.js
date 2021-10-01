import React, {useState} from 'react';
import LayoutSite from "../layouts/LayoutSite";
import HomeContentBg from "../components/Home/HomeContentBg";
import HomeContent from "../components/Home/HomeContent";

const Home = () => {
    const [state] = useState({
        bg_on_off: false,
    });

    return (
        <LayoutSite state={state}>
            {state.bg_on_off ? <HomeContentBg state={state}/>:
                <HomeContent state={state}/>}
        </LayoutSite>
    );
}

export default Home;
