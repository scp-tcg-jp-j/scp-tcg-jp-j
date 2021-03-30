import 'core-js/stable';
import 'bootstrap';
import {Aurelia, bindable, bindingMode} from 'aurelia-framework';
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import { registerIcons } from '@fluentui/react/lib/Styling';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .globalResources(
      [ // Registrer all components here
        PLATFORM.moduleName('@dunite/au-fluent-ui/elements/Pickers/DuCompactPeoplePicker'),
        PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuTextField'),
        PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuCheckBox'),
        PLATFORM.moduleName('@dunite/au-fluent-ui/elements/BasicInputs/DuDropDown'),
      ]);

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  //Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));

  // アイコン登録（picker用。通常のinitializeIconsだと@uifabric/iconsを使うことになりMSのライセンスにひっかかるため）
  registerIcons({
    fontFace: {
        fontFamily: `"CustomFontFamily"`
    },
    icons: {
        'cancel': '×',
        'contact': '',
        'checkmark': '✓',
    }
  });
}
