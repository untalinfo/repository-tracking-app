import { i18nInstance } from '@vecindario/vecindario-suite-components';
import { LOCALES, importFiles } from '../../application/helpers/common-functions';
import {
	DOMAIN_NAME as SHARED_DOMAIN,
	enResource as EN_SHARED_DOMAIN,
	esResource as ES_SHARED_DOMAIN,
} from './locales';

const importLocales = import.meta.glob('../../../domains/**/infrastructure/locales/index.*');
const localesDomain = await importFiles(importLocales);

localesDomain.forEach((locales) => {
	const { DOMAIN_NAME, enResource, esResource } = locales;
	i18nInstance.addResources(LOCALES.EN_GLOBAL, DOMAIN_NAME, enResource);
	i18nInstance.addResources(LOCALES.ES_GLOBAL, DOMAIN_NAME, esResource);
});

i18nInstance.addResources(LOCALES.EN_GLOBAL, SHARED_DOMAIN, EN_SHARED_DOMAIN);
i18nInstance.addResources(LOCALES.ES_GLOBAL, SHARED_DOMAIN, ES_SHARED_DOMAIN);

export default i18nInstance;
