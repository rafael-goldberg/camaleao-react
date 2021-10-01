import React from "react";

const Container = (props) => {
    const {children, id, classNames} = props;

    return(
        <div id={id} className={classNames ? classNames:""}>
            <section className="pt-4 my-5 pb-5">
                <div className="container px-lg-5">
                    {children}
                </div>
            </section>
        </div>
    )
}
export default Container;
