export type ThemeType = 'dark' | 'light';

export interface IToggler {
    theme: ThemeType,
    toggler: () => void,
};