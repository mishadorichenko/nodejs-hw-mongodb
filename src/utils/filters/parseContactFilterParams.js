import parseFilterParams from './parseFilterParams.js';
import parseFilterIsFavourite from './parseFilterIsFavourite.js';
import parseFilterContactType from './parseFilterContactType.js';

const parseContactFilterParams = ({ isFavourite, contactType }) => {
  const parsedIsFavourite = parseFilterIsFavourite(
    parseFilterParams(isFavourite),
  );
  const parsedContactType = parseFilterContactType(
    parseFilterParams(contactType),
  );

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};

export default parseContactFilterParams;
