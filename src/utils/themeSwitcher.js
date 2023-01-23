import themes from '../styles/themes.module.css';

export const lightInToDark = (theme) => {
  if (theme === 'light') return themes.light;
  return themes.dark;
};

export const darkInToLight = (theme) => {
  if (theme === 'light') return themes.dark;
  return themes.light;
};
