import advantages from '../data/advantages.json';

export const IMPORT_ADVANTAGES = 'IMPORT_ADVANTAGES';

export const importAdvantages = () => {
    return {
        type: IMPORT_ADVANTAGES,
        advantages: advantages
    }
};