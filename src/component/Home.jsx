import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="https://static.unica.vn/media/imagesck/1602820670_banner-quang-cao-dep-3.jpg?v=1602820670" className="card-img" alt="background" height="550px" />
            </div>
            <Products/>
        </div>
    );
}
export default Home;