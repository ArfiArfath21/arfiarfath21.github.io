import React from "react";
import AwardCard from "./AwardCard";

function CardGrid() {
    return (
        <div className="card-grid">
            <AwardCard name="Embracing the Future" img="./assets/achievements/ETF.PNG" date="October 2024"/>
            <AwardCard name="Embracing the Future" img="./assets/achievements/ETF.PNG" date="October 2024"/>
            <AwardCard name="Embracing the Future" img="./assets/achievements/ETF.PNG" date="October 2024"/>
            <AwardCard name="Embracing the Future" img="./assets/achievements/ETF.PNG" date="October 2024"/>
        </div>
    );
}

export default CardGrid;
