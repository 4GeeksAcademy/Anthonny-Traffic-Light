import React, { useState } from "react";
import ciudadImg from "../../img/ciudad.jpg";
import "../../styles/index.css"; 

const Home = () => {
    const [activeLight, setActiveLight] = useState(null);

    const handleLightClick = (light) => {
        setActiveLight(light);
    };

    const backgroundStyle = {
        backgroundImage: `url(${ciudadImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={backgroundStyle}>
            <div className="traffic-light-container">
                <h1>Traffic Light</h1>
                <div className="pole"></div>
                <div className="traffic-light">
                    <div
                        className={`light red ${activeLight === "red" ? "on" : ""}`}
                        onClick={() => handleLightClick("red")}
                    ></div>
                    <div
                        className={`light yellow ${activeLight === "yellow" ? "on" : ""}`}
                        onClick={() => handleLightClick("yellow")}
                    ></div>
                    <div
                        className={`light green ${activeLight === "green" ? "on" : ""}`}
                        onClick={() => handleLightClick("green")}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Home;