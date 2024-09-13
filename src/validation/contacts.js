import Joi from 'joi';
import { contactTypeList } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must have at least {#limit} characters',
    'string.max': 'Name cannot exceed {#limit} characters',
    'any.required': 'Name is a required field',
  }),
  phoneNumber: Joi.string().required(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  //   contactType: Joi.string().valid('work', 'home', 'personal').required(),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .required(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must have at least {#limit} characters',
    'string.max': 'Name cannot exceed {#limit} characters',
    'any.required': 'Name is a required field',
  }),
  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  //   contactType: Joi.string().valid('work', 'home', 'personal').required(),
  contactType: Joi.string().valid(...contactTypeList),
});
