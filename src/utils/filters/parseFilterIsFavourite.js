const parseFilterIsFavourite = (parsedIsFavourite) =>
  parsedIsFavourite &&
  ['true', 'false'].includes(parsedIsFavourite) &&
  parsedIsFavourite;

export default parseFilterIsFavourite;
