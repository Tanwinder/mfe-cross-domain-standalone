import { searchModule } from '../config/moduleConfig';
import bootstrap from './bootstrap';
window[searchModule.urlGlobalVariable] = searchModule.url;

bootstrap(() => {});
