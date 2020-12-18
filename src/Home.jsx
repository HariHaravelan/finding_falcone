import React from 'react';
import FALCON from "./assets/Falcone.png"
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";


const styles = ({
    buttonLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    startButton: {
        marginLeft: "22%",
    },
    homeImage: {
        width: 300,
        paddingTop: "25%",
        paddingLeft: "22%",
    }
});

const Home = (props) => {

    return (

        <Container maxWidth="sm">
            <img className={props.classes.homeImage} src={FALCON}/>
            <Typography gutterBottom align="left" variant="h6" component="h2">
                Our problem is set in the planet of Lengaburu...in the distant distant galaxy of Tara B. After
                the
                recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for
                15
                years.
                Queen Al Falcone is now in hiding. But if King Shan can find her before the years are up, she
                will
                be exiled for another 15 years....
            </Typography>
            <Link to="/play" className={props.classes.buttonLink}>
                <Button className={props.classes.startButton} variant="contained" size="large"  color="primary">
                    Help King Shan find Al Falcone
                </Button>
            </Link>
        </Container>

    );

};

export default withStyles(styles)(Home);