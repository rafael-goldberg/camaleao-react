import React, {Component} from 'react';
import * as BsIcons from 'react-icons/bs';

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    render() {
        return (
            <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <button className="btn btn-outline-secondary p-1 px-2 pb-2 shadow-none" onClick={this.scrollTop}>
                    <BsIcons.BsChevronDoubleUp/>
                </button>
            </div>
        );
    }
}

export default ScrollToTop;
