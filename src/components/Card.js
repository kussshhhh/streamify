import React from "react";

// this is the metric card 

const Card = ({title, number}) => {


    return (
        <div id="metric-card">
            <h2>{title}</h2>
            <text>{number}</text>
        </div>
    )
    
}

export default Card