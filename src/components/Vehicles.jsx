import React from 'react';
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

const Vehicles = (props) => {

    const onVehicleChange = (event) => {
        props.onVehicleChange(event, props.index, props.travelDistance);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="vehicles" name="vehicles">
                {props.vehicles && props.vehicles.map((vehicle) => {
                    return (
                        <FormControlLabel key={vehicle.name}
                                          value={vehicle.name}
                                          control={<Radio/>}
                                          label={vehicle.name + " (" + vehicle.total_no + ")"}
                                          onChange={onVehicleChange}
                                          disabled={vehicle.total_no === 0 || vehicle.max_distance < props.travelDistance}
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    );
};


export default Vehicles;