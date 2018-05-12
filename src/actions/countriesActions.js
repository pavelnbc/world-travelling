import countries from '../data/countries.json';

export const IMPORT_COUNTRIES = 'IMPORT_COUNTRIES';

export const importCountries = () => {
    return {
        type: IMPORT_COUNTRIES,
        countries: countries
    }
};