import { SORT_ORDER } from '../constants/index.js';

const parseSortParams = ({ sortBy, sortFields, sortOrder }) => {
  const parsedSortOrder = SORT_ORDER.includes(sortOrder)
    ? sortOrder
    : SORT_ORDER[0];
  const parsedSortBy = sortFields.includes(sortBy) ? sortBy : sortFields[0];

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};

export default parseSortParams;
