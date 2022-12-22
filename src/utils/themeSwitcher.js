import themes from '../styles/themes.module.css';

export const lightToDark = (theme) => {
  if (theme === 'light') return themes.light;
  return themes.dark;
};

export const darkToLight = (theme) => {
  if (theme === 'light') return themes.dark;
  return themes.light;
};
