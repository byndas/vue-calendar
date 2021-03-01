<template>
  <div id="event-form" :class="{active: active}" :style="{ top: '500px', left: '500px'}">
    <h4>Add an event</h4>
    <p>{{ date.format('dddd, MMM Do')}}</p>
    <div class="text">
      <input
        v-focus
        type="text"
        v-model="description"
        @keyup.enter="create"
        placeholder="whatever you want"
      />
      <div class="buttons">
        <button @click="create">Create</button>
      </div>
    </div>
    <button id="close-button">&#10005</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: ""
    };
  },
  methods: {
    close() {
      this.$store.commit("eventFormActive", false);
    },
    create() {
      if (this.description.length > 0) {
        this.$store.commit("addEvent", description);
        this.description = "";
        this.$store.commit("eventFormActive", false);
      }
    }
  },
  computed: {
    date() {
      return this.$store.state.eventFormDate;
    },
    active() {
      return this.$store.state.eventFormActive;
    },
    top() {
      return `${this.store.state.eventFormPosY}px`;
    },
    left() {
      return `${this.store.state.eventFormPosX}px`;
    }
  },
  directives: {
    focus: {
      update(el) {
        el.focus();
      }
    }
  }
};
</script>