import React from 'react';
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

const Vehicles = (props) => {

    const onVehicleChange = (event) => {
        props.onVehicleChange(event, props.index);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="vehicles" name="vehicles">
                {props.planet && props.vehicles && props.vehicles.map((vehicle) => {
                    return (
                        <FormControlLabel key={vehicle.name}
                                          value={vehicle.name}
                                          control={<Radio/>}
                                          label={vehicle.name + " (" + vehicle.total_no + ")"}
                                          onChange={onVehicleChange}
                                          disabled={vehicle.total_no === 0 || vehicle.max_distance < props.planet.distance}
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    );
};


export default Vehicles;