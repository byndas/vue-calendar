<template>
  <div :class="classObject">
    {{ day.format('D') }}
    <ul class="event-list">
      <li v-bind:for="event in events">{{ event.description }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["day"],
  computed: {
    events() {
      return this.$store.events.filter(event =>
        event.date.isSame(this.dat, "day")
      );
    },
    classObject() {
      let eventFormDate = this.$store.filter(event =>
        event.date.isSame(this.day, "day")
      );
      let eventFormActive = this.$store.state.eventFormActive;
      let today = this.day.isSame(this.$moment(), "day");
      return {
        day: true,
        today,
        past: this.day.isSameOrBefore(this.$moment(), "day ") && !today,
        active: eventFormDate.isSame(this.day, "day") && eventFormActive
      };
    },
    methods: {
      captureClick(event) {
        this.$store.commit("eventFormPos", {
          x: event.clientX,
          y: event.clientY
        });
        this.$store.commit("eventFormActive", true);
        this.$store.commit("eventFormDate", this.day);
      }
    }
  }
};
</script>