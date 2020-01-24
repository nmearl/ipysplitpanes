import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

Vue.component('splitpanes', Splitpanes);
Vue.component('pane', Pane);

export { SplitPanesModel } from './SplitPanes';

export const { version } = require('../package.json'); // eslint-disable-line global-require
