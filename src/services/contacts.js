import ContactCollection from '../db/models/Contact.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';

export const getContacts = async ({ perPage, page }) => {
  const skip = (page - 1) * perPage;
  // console.log('**********************************************************');
  // console.log('In service');
  // console.log('skip = ' + skip);
  // console.log('page = ' + page);
  // console.log('perPage = ' + perPage);
  // console.log('**********************************************************');
  const data = await ContactCollection.find().skip(skip).limit(perPage);
  const count = await ContactCollection.find().countDocuments();

  const paginationData = calculatePaginationData({ count, perPage, page });

  return {
    data,
    page,
    perPage,
    totalItems: count,
    ...paginationData,
  };
};

export const getContactById = (contactId) =>
  ContactCollection.findById(contactId);

export const createContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (filter, data, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });

  if (!rawResult || !rawResult.value) return null;

  return {
    data: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteContact = (filter) =>
  ContactCollection.findOneAndDelete(filter);
