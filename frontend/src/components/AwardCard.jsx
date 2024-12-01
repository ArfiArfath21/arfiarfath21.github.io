import React from "react";

function AwardCard(props) {
    return (
    <div className="grid-card achievement-card">
        <div className="card-header">
            <img src={props.img} alt={props.name} />
        </div>
        <div className="card-body">
            <h4>{props.name}</h4>
            <p>{props.date}</p>
        </div>
    </div>
    );
}

export default AwardCard;
