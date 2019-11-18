import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: colors.lightBlue.darken4,
        secondary: colors.lightBlue.lighten1,
        accent: colors.indigo.base,
        warning: colors.red.lighten1
      }
    }
  }
});
