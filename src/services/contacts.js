import { SORT_ORDER } from '../constants/index.js';
import ContactCollection, { sortFields } from '../db/models/Contact.js';
import calculatePaginationData from '../utils/calculatePaginationData.js';

export const getContacts = async ({
  perPage = 10,
  page = 1,
  sortBy = sortFields[0],
  sortOrder = SORT_ORDER[0],
  filter = {},
}) => {
  const skip = (page - 1) * perPage;
  // console.log('********************In services****************************');
  // console.log('filter = ' + filter.isFavourite);
  // console.log('filter = ' + filter.contactType);
  // console.log('perPage = ' + perPage);
  // console.log('**********************************************************');
  const contactQuery = ContactCollection.find();
  if (filter.isFavourite) {
    contactQuery.where('isFavourite').equals(filter.isFavourite);
  }
  if (filter.contactType) {
    contactQuery.where('contactType').equals(filter.contactType);
  }
  if (filter.userId) {
    contactQuery.where('userId').equals(filter.userId);
  }

  const count = await ContactCollection.find()
    .merge(contactQuery)
    .countDocuments();

  const data = await contactQuery
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData({ count, perPage, page });

  return {
    data,
    page,
    perPage,
    totalItems: count,
    ...paginationData,
  };
};

export const getContact = (filter) => ContactCollection.findOne(filter);

export const createContact = (payload) => ContactCollection.create(payload);

export const updateContact = async (filter, data, options = {}) => {
  const rawResult = await ContactCollection.findOneAndUpdate(filter, data, {
    //ці два рядки це правило - "Повертай нове і роби валідацію"
    //ми коментуємо ці два рядки тому що замість них використовуємо hook setUpdateOptions який має те саме значення
    // сам hook setUpdateOptions прописується в src/db/models/Contact.js
    // new: true,
    // runValidators: true, // make validation when fields are updated in base
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
