import {DONLON, ENCHAI, JEBING, LERBIN, PINGASOR, PLANET, SAPIR} from "../common/PlanetAsset";

const planetImages = {
    Donlon: DONLON,
    Enchai: ENCHAI,
    Jebing: JEBING,
    Sapir: SAPIR,
    Lerbin: LERBIN,
    Pingasor: PINGASOR,
    NoPlanet: PLANET
};

export const getPlanetImage = (name) => {
    return planetImages[name] ? planetImages[name] : planetImages["NoPlanet"];
};