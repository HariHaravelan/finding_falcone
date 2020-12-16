import React, {useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import {fetchPlanets} from "./services/PlanetService";
import {fetchVehicles} from "./services/VehicleService";
import JourneyPlan from "./components/JourneyPlan";
import _ from 'lodash';

const App = () => {
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [availableVehicles, setAvailableVehicles] = useState([]);
    const [availablePlanets, setAvailablePlanets] = useState([]);
    const [selectedPlanets, setSelectedPlanets] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);

    useEffect(() => {
        fetchPlanets().then(({data}) => {
            setAvailablePlanets(data);
            setPlanets(data);
        }).catch(() => {
            setAvailablePlanets([]);
            setPlanets([])
        });
        fetchVehicles().then(({data}) => {
            setVehicles(data);
            setAvailableVehicles(data);
        }).catch(() => {
            setVehicles([]);
            setAvailableVehicles([])
        });
    }, []);


    const addSelectedVehicles = (event) => {
        const vehicles = [...selectedVehicles];
        vehicles.push(event.target.value);
        setSelectedVehicles(vehicles);
    };

    const addSelectedPlanets = (event) => {
        const planets = [...selectedPlanets];
        planets.push(event.target.value);
        setSelectedPlanets(planets);
        setAvailablePlanets(availablePlanets.filter((planet) => planet.name !== event.target.innerHTML));
    };

    return (
        <div className="App">
            <Typography variant="h3" align={"center"}>
                Finding Falcone!
            </Typography>

            <Grid container>
                {_.times(4, (index) => {
                    return (
                        <Grid item xs={6} sm={3} key={index}>
                            <JourneyPlan index={index} planets={availablePlanets} vehicles={availableVehicles}
                                         onDestinationChange={addSelectedPlanets}
                                         onVehicleChange={addSelectedVehicles}
                            />
                        </Grid>);
                })}
            </Grid>
        </div>);
};
export default App;
