const parseFilterParams = (value) => {
  if (typeof value !== 'string') return;
  return value;
};

export default parseFilterParams;
