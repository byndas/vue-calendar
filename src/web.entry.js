import Vue from "vue";
import ".styles.scss";

import store from "./store";

import moment from "moment-timezone";
// ensures all users see their timezone
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment;
  }
});

import App from ".components/App.vue";

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  };
});

let initialState = Object.assign({}, store.state, {
  events
});

store.replaceState(initialState);

new Vue({
  el: "#app",
  data: {
    moment
  },
  components: {
    App
  }
});
