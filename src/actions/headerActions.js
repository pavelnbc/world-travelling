import headerLinks from '../data/headerLinks.json';

export const IMPORT_HEADER_lINKS = 'IMPORT_HEADER_lINKS';

export const importHeaderLinks = () => {
    return {
        type: IMPORT_HEADER_lINKS,
        headerLinks: headerLinks
    }
};