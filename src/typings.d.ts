// * ===========================================================================
// * Globally declared modules, types, and interfaces. Can be used anywhere in
// * the project without importing directly.
// * ===========================================================================

declare module '*.scss'; // for TypeScript to recognize SCSS files
declare module "*.png"; // for TypeScript to recognize png files
declare module "*.svg"; // for TypeScript to recognize svg files


type OptionType = {
    title: string,
    value: string
};
interface Iitems {
    [key: string]: {
        title: string;
        quantity: number;
        calories: number;
        time: string;
        img: string;
    }[]
};