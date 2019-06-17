import randomColor from 'randomcolor';

export default {
  orange: '#fc6720',
  border: '#cccccc',
  navigationTitleShadow: '#efeded',
  white: '#ffffff'
};

export const getRandomColor = (): string => {
  const value = randomColor();
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
};
