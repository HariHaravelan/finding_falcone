import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    info: {
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    }
});

const Footer = (props) => {

    return (
        <div>
            <AppBar position="fixed" color="primary" className={props.classes.appBar}>
                <Toolbar>
                    <Typography className={props.classes.info} variant="caption" align={"center"} color="inherit">
                        Coding problem -  www.geektrust.in/coding-problem/frontend/space
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(useStyles)(Footer);