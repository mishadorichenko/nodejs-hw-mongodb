import * as fs from 'node:fs/promises';
import { v2 as cloudinary } from 'cloudinary';

import { env } from './env.js';

const cloud_name = env('CLOUDINARY_CLOUD_NAME');
const api_key = env('CLOUDINARY_API_KEY');
const api_secret = env('CLOUDINARY_API_SECRET');

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

const saveFileToCloudinary = async (file, folder) => {
  const response = await cloudinary.uploader.upload(file.path, {
    folder,
  });
  await fs.unlink(file.path);
  console.log('file.path =' + file.path);
  console.log('response.secure_url =' + response.secure_url);
  return response.secure_url;
};

export default saveFileToCloudinary;
