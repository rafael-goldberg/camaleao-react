import React from "react";

const ContainerFluid = (props) => {
    const {children, id} = props;

    return(
        <div id={id}>
            <section className="pt-4 my-5 pb-5">
                {children}
            </section>
        </div>
    )
}
export default ContainerFluid;
