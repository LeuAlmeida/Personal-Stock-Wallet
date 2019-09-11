import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import esLang from './entries/es-ES';
import brLang from './entries/pt-BR';
// import enRtlLang from './entries/en-US-rtl';

const AppLocale = {
    en: enLang,
    es: esLang,
    br: brLang
    // enrtl:enRtlLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.es.data);
addLocaleData(AppLocale.br.data);
// addLocaleData(AppLocale.enrtl.data);

export default AppLocale;
