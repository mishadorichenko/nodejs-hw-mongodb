import { Router } from 'express';
import * as contactsControllers from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get(
  '/',
  ctrlWrapper(contactsControllers.getAllContactsController),
);

contactsRouter.get(
  '/:id',
  ctrlWrapper(contactsControllers.getContactByIdController),
);

contactsRouter.post('/', ctrlWrapper(contactsControllers.addContactController));

contactsRouter.put(
  '/:id',
  ctrlWrapper(contactsControllers.upsertContactController),
);

contactsRouter.patch(
  '/:id',
  ctrlWrapper(contactsControllers.patchContactController),
);

contactsRouter.delete(
  '/:id',
  ctrlWrapper(contactsControllers.deleteContactController),
);

export default contactsRouter;
