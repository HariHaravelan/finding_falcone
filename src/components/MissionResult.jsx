import React from 'react';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import {getPlanetImage} from "../utils/PlanetImageUtil";

const styles = ({
    buttonLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    button: {
        marginLeft: "5%",
    },
    actionArea: {
        margin: "10% 40%",
    },
    planetImage: {
        paddingTop: "3%",
        width: 200,
        paddingLeft: "45%",
    }
});

const MissionResult = (props) => {

    const success = props.result.status === "success";

    return (
        <div>
            {success && <div><Typography variant="h5" align={"center"} style={{paddingTop: "5%"}}>
                Success! Congratulations on finding Falcone! King Shan is mighty pleased!
            </Typography>
                <img className={props.classes.planetImage} src={getPlanetImage(props.result.planet_name)}/>
                <Typography variant="subtitle1" align={"center"}>
                    Planet: {props.result.planet_name}
                </Typography>
                <Typography variant="subtitle1" align={"center"}>
                    Time taken: {props.result.timeTaken}
                </Typography>
            </div>
            }
            {!success && <Typography variant="h5" align={"center"} style={{paddingTop: "15%"}}>
                Sorry! You could not find Falcone!
            </Typography>}
            <div className={props.classes.actionArea}>
                <Link to="/play" className={props.classes.buttonLink}>
                    <Button className={props.classes.button} variant="contained" size="large" color="primary">
                        Play Again!
                    </Button>
                </Link>
                <Link to="/home" className={props.classes.buttonLink}>
                    <Button className={props.classes.button} variant="contained" size="large" color="primary">
                        Go Home!
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default withStyles(styles)(MissionResult);