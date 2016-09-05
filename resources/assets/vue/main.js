import Vue from 'vue';
import VueRouter from 'vue-router';
import MaterialUiVue from 'material-ui-vue';
import layout from './layout.vue';

import App from './components/App.vue';

Vue.use(VueRouter);

var router = new VueRouter();

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
});
var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

router.map({
    '/': {
        component: App
    },
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});

let Router = Vue.extend({
    components: {
        layout
    }
});

router.start(Router, 'body');