export const buildFindRequest = (token, selectedPlanets, selectedVehicles) => ({
    token: token,
    planet_names: [
        ...selectedPlanets
    ],
    vehicle_names: [...selectedVehicles]
});

