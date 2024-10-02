import multer from 'multer';
import { TEMP_UPLOAD_DIR } from '../constants/index.js';
import createHttpError from 'http-errors';

// Модуль 6. Заняття 2. Пошта. Робота із зображеннями 0:42:00
const storage = multer.diskStorage({
  // В цьому налаштуванні синтаксис який працює незвично.
  // в callback передаємо місце де буде зберігатися файл
  // null - передається тоді коли при обробці не виникло проблем. Це означає що все добре і ми можемо зберігати файл.
  // В змінні file зберігається інформація про файл в пам'ті але це не значить що він збережений.
  // multer збереже файл після виконання дій над ним

  // destination: (req, file, callback) => {
  //     callback(null, TEMP_UPLOAD_DIR);

  // Ми можемо зробити запис коротшим

  destination: TEMP_UPLOAD_DIR, //обов'язкове налаштування
  filename: (req, file, callback) => {
    //не обов'язкове налаштування допомогає вказати і'мя файлу
    // створюємо унікальне ім'я файлу щоб не перезаписувати файл кожного разу
    const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniquePrefix}_${file.originalname}`;
    callback(null, filename);
  }, //не обов'язкове налаштування
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};

const fileFilter = (req, file, callback) => {
  const extension = file.originalname.split('.').pop();
  if (extension === 'exe') {
    return callback(createHttpError(400, '.exe not valid extension'));
  }

  callback(null, true);
};

const upload = multer({
  storage,
  limits,
  fileFilter,
});

export default upload;
