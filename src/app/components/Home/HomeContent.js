import React, {useState} from "react";
import HeroCentered from "./HeroCentered";
import HeroImage from "./HeroImage";
import HeroForm from "./HeroForm";
import CarouselImage from "./CarouselImage";
import Container from "../Container";
import ContainerFluid from "../ContainerFluid";
import FeaturedCard from "./FeaturedCard";
import Jumbotron from "./Jumbotron";
import ParallaxBackground from "./ParallaxBackground";
import Testimonials from "./Testimonials";
import Prices from "./Prices";
import PostFeatured from "./PostFeatured";
import Newsletter from "./Newsletter";

const HomeContent = () => {
    const [state] = useState({
        slider: false,
        hero: [
            {id:1, renderHero:<HeroCentered/>, isActive:true},
            {id:2, renderHero:<HeroImage/>, isActive:false},
            {id:2, renderHero:<HeroForm/>, isActive:false},
        ],
        featured_on_off: true,
        jumbotron_on_off: true,
        parallax_on_off: true,
        testimonials_on_off: true,
        prices_on_off: true,
        blog_on_off: true,
        newsletter_on_off: true,
    });

    return(
        <div style={{paddingBottom:'80px'}}>
            <header>
                {state.slider ? <CarouselImage/>: state.hero.length > 0 ?
                    state.hero.filter(item => item.isActive === true).slice(0,1).map(item =>
                        <span key={item.id}>{item.renderHero}</span>):null}
            </header>
            {state.featured_on_off &&
                <Container id={"featured"}>
                    <FeaturedCard/>
                </Container>}
            {state.jumbotron_on_off &&
                <Container id={"jumbotron"}>
                    <Jumbotron/>
                </Container>}
            {state.parallax_on_off &&
                <ContainerFluid id={"parallax"}>
                    <ParallaxBackground/>
                </ContainerFluid>}
            {state.testimonials_on_off &&
                <Container id={"testimonials"} classNames={"bg-light"}>
                    <Testimonials/>
                </Container>}
            {state.prices_on_off &&
                <Container id={"prices"}>
                    <Prices/>
                </Container>}
            {state.blog_on_off &&
                <Container id={"blog"} classNames={"bg-light"}>
                    <PostFeatured/>
                </Container>}
            {state.newsletter_on_off &&
                <Container id={"newsletter"}>
                    <Newsletter/>
                </Container>}
        </div>
    )
}
export default HomeContent;
