import React, {useEffect, useState} from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {getPlanetImage} from "../utils/PlanetImageUtil";


const JourneyPlan = ({currentPlanet, children}) => {

    return (
        <Card style={{height: 470}}>
            <CardMedia
                style={{height: 0, paddingTop: "100%",}}
                image={getPlanetImage(currentPlanet?.name)}
                title={currentPlanet?.name}
            />
            <CardContent>
                {children}
            </CardContent>
        </Card>

    );
};

export default JourneyPlan;