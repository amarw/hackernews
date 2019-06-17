import randomColor from 'randomcolor';

export default {
  orange: '#fc6720',
  border: '#cccccc',
  navigationTitleShadow: '#efeded',
  white: '#ffffff',
  darkText: '#232323',
  black: '#000000',
  blueText: '#2664c9',
  greyText: '#abacad'
};

export const getRandomColor = (): string => {
  const value = randomColor();
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};
