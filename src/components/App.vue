<template>
  <div>
    <div id="day-bar">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
    <div id="calendar">
      <div :for="week in weeks" class="calendar-week">
        WEEK
        <calendar-day :for="day in week" :day="day">{{ day }}</calendar-day>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay";

export default {
  data() {
    return {
      month: 2,
      year: 2020
    };
  },
  computed: {
    // algorithm to display days in month
    days() {
      // generating all days in current month
      let days = [];
      let currentDay = this.$moment(
        `${this.year} - ${this.month} -1`,
        "YYYY-M-D"
      );
      do {
        days.push(currentDay);
        currentDay = this.$moment(currentDay).add(1, "days");
      } while (currentDay.month() + 1 === this.month);
      // adding previous days to start
      const SUNDAY = 0;
      const MONDAY = 1;

      currentDay = this.$moment(days[0]);

      if (currentDay.day() !== MONDAY) {
        do {
          currentDay = this.$moment(currentDay).subtract(1, "days");
          days.unshift(currentDay);
        } while (currentDay.day() !== MONDAY);
      }
      // adding following days to end
      currentDay = this.$moment(days[days.length - 1]);
      if (currentDay.day() !== SUNDAY) {
        do {
          currentDay = this.$moment(currentDay).add(1, "days");
          days.push(currentDay);
        } while (currentDay.day() !== SUNDAY);
      }
      return days;
    },
    weeks() {
      let weeks = [];
      let week = [];

      for (let day of this.days) {
        week.push(day);
        if (week.length === 7) {
          weeks.push(week);
          week = [];
        }
      }
    }
  },
  components: {
    CalendarDay
  }
};
</script>
