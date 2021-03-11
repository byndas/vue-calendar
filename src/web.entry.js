import ".styles.scss";

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  };
});

import VueCalendar from "./entry.js"

VueCalendar(events).$mount("#app");