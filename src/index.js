import Row from './row/index.js';

const components = [
    Row
];

const install = function (Vue) {
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
 install
};