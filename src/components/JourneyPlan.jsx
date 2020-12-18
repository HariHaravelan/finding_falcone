import React, {useState} from 'react';
import Destination from "./Destination";
import Vehicles from "./Vehicles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {getPlanetImage} from "../utils/PlanetImageUtil";


const JourneyPlan = ({index, planets, onDestinationChange, vehicles, onVehicleChange}) => {

    const [showVehicles, setShowVehicles] = useState(false);
    const [currentPlanet, setCurrentPlanet] = useState({});

    const changeDestination = (event, index) => {
        setShowVehicles(event.target.innerHTML.length !== 0);
        setCurrentPlanet(planets.filter(planet => planet.name === event.target.innerHTML)[0]);
        onDestinationChange(event, index);
    };

    return (
        <Card style={{height: 470}}>
            <CardMedia
                style={{height: 0, paddingTop: "100%",}}
                image={getPlanetImage(currentPlanet?.name)}
                title={currentPlanet?.name}
            />
            <CardContent>
                <Destination index={index} planets={planets}
                             onDestinationChange={changeDestination}/>
                {showVehicles && <Vehicles index={index} vehicles={vehicles} travelDistance={currentPlanet?.distance}
                                           onVehicleChange={onVehicleChange}/>}
            </CardContent>
        </Card>

    );
};

export default JourneyPlan;