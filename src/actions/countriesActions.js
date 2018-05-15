import countries from '../data/countries.json';
import directions from '../data/popularDirections.json';

export const IMPORT_COUNTRIES = 'IMPORT_COUNTRIES';
export const IMPORT_DIRECTIONS = 'IMPORT_DIRECTIONS';

export const importCountries = () => {
    return {
        type: IMPORT_COUNTRIES,
        countries: countries
    }
};

export const importDirections = () => {
    return {
        type: IMPORT_DIRECTIONS,
        directions: directions
    }
};



