import React, {useEffect, useState} from 'react';
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

const Vehicles = (props) => {

    const [availableVehicles, setAvailableVehicles] = useState(props.vehicles);

    const onVehicleChange = (event) => {
        const allAvailableVehicles = [...availableVehicles];
        allAvailableVehicles.map(vehicle => {
            if(vehicle.name === event.target.value){
                vehicle.total_no -= 1;
                return vehicle;
            }
            else
                return vehicle
        });
        setAvailableVehicles(allAvailableVehicles);
        props.onVehicleChange(event);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="vehicles" name="vehicles">
                {availableVehicles && availableVehicles.map((vehicle) => {
                    return (
                        <FormControlLabel key={vehicle.name}
                                          value={vehicle.name}
                                          control={<Radio/>}
                                          label={vehicle.name + " (" + vehicle.total_no + ")"}
                                          onChange={onVehicleChange}
                                          disabled={vehicle.total_no === 0}
                        />
                    )
                })}
            </RadioGroup>
        </FormControl>
    );
};


export default Vehicles;