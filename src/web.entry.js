import Vue from "vue";
import ".styles.scss";

import moment from "moment-timezone";
// ensures all users see their timezone
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment;
  }
});

import App from ".components/App.vue";

new Vue({
  el: "#app",
  data: {
    moment
  },
  components: {
    App
  }
});
