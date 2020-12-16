import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        width: 150
    },
});

const Destination = (props) => {

    const classes = useStyles();

    return (
        <Autocomplete
            className={classes.root}
            options={props.planets}
            getOptionLabel={(option) => option.name}
            renderInput={(params) =>
                <TextField {...params} label={"Destination " + (props.index+1)} variant="outlined"/>}
            onChange={props.onDestinationChange}
        />
    );
};

export default Destination;