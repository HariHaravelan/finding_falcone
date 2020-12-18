import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import JourneyPlan from "./JourneyPlan";
import React, {useEffect, useState} from "react";
import {fetchPlanets} from "../services/PlanetService";
import {fetchVehicles} from "../services/VehicleService";
import _ from 'lodash';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import {fetchResult, getToken} from "../services/FindService";
import {buildFindRequest} from "../api/FindRequest";
import {useHistory} from "react-router";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Destination from "./Destination";
import Vehicles from "./Vehicles";

const styles = ({
    content: {
        margin: "0 auto",
        width: 900,
    },
    submit: {
        margin: "10% 40%",
    },
    backdrop: {
        zIndex: 2,
        color: '#fff',
    },
    header: {
        padding: "5% 0",
        marginBottom: "3%",
    }
});

const NUMBER_OF_PLANETS_TO_SEARCH = 4;
const NUMBER_OF_VEHICLES_TO_USE = 4;
const LaunchPad = (props) => {
    const history = useHistory();
    const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [availableVehicles, setAvailableVehicles] = useState([]);
    const [availablePlanets, setAvailablePlanets] = useState([]);
    const [selectedPlanets, setSelectedPlanets] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);
    const [timeTaken, setTimeTaken] = useState(0);
    const [isInProgress, setInProgress] = useState(false);
    const enableFindFalcone = selectedPlanets.length === NUMBER_OF_PLANETS_TO_SEARCH
        && selectedVehicles.length === NUMBER_OF_VEHICLES_TO_USE;

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

    const redirectToResultPage = () => history.push(`/result`);

    const addSelectedVehicles = (event, index) => {
        const allSelectedVehicles = [...selectedVehicles];
        const previousVehicle = selectedVehicles[index] &&
            vehicles.filter(vehicle => vehicle.name === selectedVehicles[index].name)[0];
        const currentVehicle = vehicles.filter(vehicle => vehicle.name === event.target.value)[0];

        updateAvailableVehicles(currentVehicle, previousVehicle);
        allSelectedVehicles[index] = currentVehicle;
        setSelectedVehicles(allSelectedVehicles);
        updateTimeTaken(selectedPlanets[index].distance, currentVehicle, previousVehicle);
    };

    const updateAvailableVehicles = (currentVehicle, previousVehicle) => {
        const allAvailableVehicles = [...availableVehicles];

        if (previousVehicle) {
            previousVehicle && allAvailableVehicles
                .map(vehicle => {
                    if (vehicle.name === previousVehicle.name)
                        vehicle.total_no += 1;
                    return vehicle;
                });
        }

        allAvailableVehicles.map(vehicle => {
            if (vehicle.name === currentVehicle.name) {
                vehicle.total_no -= 1;
                return vehicle;
            } else
                return vehicle
        });

        setAvailableVehicles(allAvailableVehicles);
    };

    const updateTimeTaken = (planetDistance, currentVehicle, previousVehicle) => {
        const timeTakenByPreviousVehicle = previousVehicle ? planetDistance / previousVehicle.speed : 0;
        setTimeTaken(timeTaken
            + (planetDistance / currentVehicle.speed - timeTakenByPreviousVehicle));
    };

    const addSelectedPlanets = (event, index) => {
        const allSelectedPlanets = [...selectedPlanets];
        allSelectedPlanets[index] = planets.filter((planet) => planet.name === event.target.innerHTML)[0];
        setSelectedPlanets(allSelectedPlanets);
        setAvailablePlanets(planets.filter((planet) => !allSelectedPlanets.map(planet => planet.name).includes(planet.name)));
    };

    const findFalcone = () => {
        const selectedPlanetNames = [...selectedPlanets].map(planet => planet.name);
        const selectedVehicleNames = [...selectedVehicles].map(vehicle => vehicle.name);
        setInProgress(true);
        getToken()
            .then((token) => {
                fetchResult(buildFindRequest(token, selectedPlanetNames, selectedVehicleNames)).then((result) => {
                    result.timeTaken = timeTaken;
                    props.setResult(result);
                    redirectToResultPage();
                }).catch(() => {
                    //TODO: ADD ERROR HANDLING
                })
            })
            .catch(() => {
                //TODO: ADD ERROR HANDLING
            });
        setInProgress(false);
    };

    const reset = () => {
        setAvailableVehicles(vehicles);
        setAvailablePlanets(planets);
        setSelectedPlanets([]);
        setSelectedVehicles([]);
        setTimeTaken(0);
    };

    return (
        <div className={props.classes.content}>
            <Backdrop className={props.classes.backdrop} open={isInProgress}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <div className={props.classes.header}>
                <Typography variant="h6" style={{float: "left"}}>
                    Time taken: {timeTaken}
                </Typography>
                <Button style={{float: "right"}} onClick={reset}
                        variant="contained" size="large"
                        color="secondary">
                    Reset
                </Button>
            </div>

            <Grid container spacing={2} alignContent="center"
                  alignItems="center"
                  justify="center">
                {_.times(NUMBER_OF_PLANETS_TO_SEARCH, (index) => {
                    return (
                        <Grid item xs={3} key={index}>
                            <JourneyPlan currentPlanet={selectedPlanets[index]}>
                                <Destination index={index} planets={availablePlanets}
                                             onDestinationChange={addSelectedPlanets}/>
                                <Vehicles index={index} vehicles={availableVehicles} planet={selectedPlanets[index]}
                                          onVehicleChange={addSelectedVehicles}/>
                            </JourneyPlan>
                        </Grid>);
                })}
            </Grid>

            <Button disabled={!enableFindFalcone} className={props.classes.submit} onClick={findFalcone}
                    variant="contained" size="large"
                    color="primary">
                Find Falcone!
            </Button>
        </div>
    );
};

export default withStyles(styles)(LaunchPad);