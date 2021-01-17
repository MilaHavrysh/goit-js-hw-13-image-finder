import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/mobile/dist/PNotifyMobile.css'
defaultModules.set(PNotifyMobile, {});
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core'
defaults.styling = 'material';
defaults.icons = 'material'


/*alert({
  text: 'Введите запрос'
});*/