import Typography from "@material-ui/core/Typography";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const useStyles = ({
    root: {
        flexGrow: 1,
    },
    title: {
        top: -30,
        left: 0,
        right: 0,
        marginLeft: 240,
    },
    buttonLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    menu: {
        width: "100%",
    },
    rightAlignMenuItems: {
        float: "right",
    }
});

const Header = (props) => {
    return (
        <div className={props.classes.root}>
            <AppBar position="static">
                <Toolbar variant="regular">
                    <div className={props.classes.menu}>
                        <div className={props.classes.rightAlignMenuItems}>
                            <Link to="/home" className={props.classes.buttonLink}>
                                <Button variant="contained"
                                        color="primary"
                                        disableElevation>
                                    HOME
                                </Button>
                            </Link>
                            <Button variant="contained"
                                    color="primary" disableElevation>
                                <a className={props.classes.buttonLink} target="_blank" href="https://www.geektrust.in/"> GEEK TRUST HOME </a>
                            </Button>
                        </div>
                        <Typography className={props.classes.title} variant="h4" align={"center"} color="inherit">
                            FINDING FALCONE!
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(useStyles)(Header);