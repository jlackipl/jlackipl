import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#ECEFF4',
                secondary: '#D8DEE9',
                accent: '#88FFBB',
                accent1: '#88FFBB',
            }
        }
    },
});
