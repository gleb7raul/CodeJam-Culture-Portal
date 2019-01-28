import enJSON from './en.json';
import byJSON from './by.json';
import ruJSON from './ru.json';
import authors from '../../data';

const enAuthors = {};
const byAuthors = {};
const ruAuthors = {};

authors.forEach((item) => {
  enAuthors[`name${item.id}`] = item.name.en;
  enAuthors[`placeOfBirth${item.id}`] = item.placeOfBirth.en;

  byAuthors[`name${item.id}`] = item.name.by;
  byAuthors[`placeOfBirth${item.id}`] = item.placeOfBirth.by;

  ruAuthors[`name${item.id}`] = item.name.ru;
  ruAuthors[`placeOfBirth${item.id}`] = item.placeOfBirth.ru;
});

export default {
  en: {
    translation: { ...enJSON, ...enAuthors },
  },
  by: {
    translation: { ...byJSON, ...byAuthors },
  },
  ru: {
    translation: { ...ruJSON, ...ruAuthors },
  },
};
