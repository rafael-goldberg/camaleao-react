import React, {useEffect, useState} from 'react';
import LayoutSite from "../layouts/LayoutSite";
import DataProducts from "../data/DataProducts";
import ProductCard from "../components/Shopping/ProductCard";
import Container from "../components/Container";

const Shopping = () => {
    const [state, setState] = useState({
        bg_on_off: false,
        products: [],
    });

    useEffect(() => {
        setState({products: DataProducts});
    },[]);

    return (
        <LayoutSite state={state}>
            <div className="bg-dark bg-gradient py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </div>
            <Container id={"shopping"}>
                <div className="row">
                    {state.products.map(product => {
                        const {id} = product;
                        return(
                            <div className="col-md-4 col-lg-3 mb-3" key={id}>
                                <ProductCard product={product}/>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </LayoutSite>
    );
}

export default Shopping;
