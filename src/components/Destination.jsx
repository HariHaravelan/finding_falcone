import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    root: {
        width: 150
    },
});

const Destination = (props) => {

    const classes = useStyles();

    const onDestinationChange = (event) =>{
        props.onDestinationChange(event,props.index);
    };

    return (
            <div>
                <Autocomplete
                    className={classes.root}
                    options={props.planets}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) =>
                        <TextField {...params} label={"Destination " + (props.index+1)} variant="outlined"/>}
                    onChange={onDestinationChange}
                />
            </div>


    );
};

export default withStyles(useStyles)(Destination);