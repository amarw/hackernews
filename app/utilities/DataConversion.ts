const arrayToObject = (array: any[]) => {
  if (!array) {
    return null;
  }
  if (array.length === 0) {
    return {};
  }

  return array.reduce(
    (accumulated, current) => ({ ...accumulated, [current.id]: current }),
    {}
  );
};
export default arrayToObject;
