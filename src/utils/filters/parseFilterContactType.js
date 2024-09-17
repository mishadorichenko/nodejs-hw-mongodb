import { contactTypeList } from '../../constants/contacts.js';

const parseFilterContactType = (parsedContactType) =>
  parsedContactType &&
  contactTypeList.includes(parsedContactType) &&
  parsedContactType;

export default parseFilterContactType;
