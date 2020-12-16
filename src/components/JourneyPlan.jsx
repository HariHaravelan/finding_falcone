import React, {useState} from 'react';
import Destination from "./Destination";
import Vehicles from "./Vehicles";


const JourneyPlan = ({index, planets, onDestinationChange, vehicles, onVehicleChange}) => {

    const [showVehicles, setShowVehicles] = useState(false);

    const changeDestination = (event) => {
        setShowVehicles(true);
        onDestinationChange(event);
    };

    return (
        <div>
            <Destination index={index} planets={planets}
                         onDestinationChange={changeDestination}/>
            {showVehicles && <Vehicles vehicles={vehicles} onVehicleChange={onVehicleChange}/>}
        </div>
    );
};

export default JourneyPlan;