import React, {useState, useRef, useEffect} from "react";
import {motion} from "framer-motion";
import "./Card.css"; // Import the CSS styles similar to your SCSS for hover effects

const Card = ({image, title, description}) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const cardRef = useRef(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        const {offsetWidth: width, offsetHeight: height} = cardRef.current;
        setDimensions({width, height});
    }, []);

    const handleMouseMove = (e) => {
        const {left, top} = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - left - dimensions.width / 2, y: e.clientY - top - dimensions.height / 2,
        });
    };

    const handleMouseLeave = () => {
        setMousePosition({x: 0, y: 0});
    };

    const rX = (mousePosition.x / dimensions.width) * 30;
    const rY = -(mousePosition.y / dimensions.height) * 30;

    return (<motion.div
            ref={cardRef}
            className="card-wrap"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="card"
                style={{
                    transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
                }}
            >
                <div
                    className="card-bg"
                    style={{
                        backgroundImage: `url(${image})`,
                        transform: `translateX(${-(mousePosition.x / 10)}px) translateY(${-(mousePosition.y / 10)}px)`,
                    }}
                ></div>
                <div className="card-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>);
};

export default Card;
