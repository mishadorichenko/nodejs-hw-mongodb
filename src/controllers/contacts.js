import createHttpError from 'http-errors';
import * as movieServices from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const data = await movieServices.getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getContactByIdController = async (req, res) => {
  // console.log(req.params); dynamic part of url is saved in request params
  const { contactId } = req.params;
  const data = await movieServices.getContactById(contactId);

  if (!data) {
    throw createHttpError(404, 'Contact not found');
    // return res.status(404).json({
    //   message: 'Contact not found',
    // });
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data,
  });
};
