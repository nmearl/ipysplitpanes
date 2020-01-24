/* eslint camelcase: off */
import { VueModel } from 'jupyter-vue';

export class SplitPanesModel extends VueModel {
    defaults() {
        return {
            ...super.defaults(),
            ...{
                _model_name: 'SplitPanesModel',
                _model_module: 'jupyter-splitpanes',
                _view_module_version: '0.1.0',
                _model_module_version: '0.1.0',
                group: null,
                tag: null,
                component_data: null,
            },
        };
    }

    getVueTag() {
        return 'splitpanes';
    }
}

VueModel.serializers = {
    ...VueModel.serializers,
};
