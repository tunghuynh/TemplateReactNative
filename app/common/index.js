import {app} from '../configs/app';
import {appConfigDev} from '../configs/config.dev';
import {appConfigProd} from '../configs/config.prod';
import translate, {getCurrentLocale, setLocale} from '../i18n';

const Common = {
    App: app,
    AppConfig: appConfigDev,
    i18n: {
        translate,
        getCurrentLocale,
        setLocale
    }
};
export default Common;