import { use } from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import resources from './translations';

use(reactI18nextModule)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
  });
