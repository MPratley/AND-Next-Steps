<template>
  <div class="taskList">
    <h1>Task List</h1>
    <h2>Due today:</h2>
    <div class="doToday" v-for="(oneDayTask, index) in oneDayLeft" :key="index">
      <Task :task="oneDayTask" />
    </div>
    <h2>Due this week:</h2>
    <div
      class="doThisWeek"
      v-for="(oneWeekTask, index) in oneWeekLeft"
      :key="index"
    >
      <Task :task="oneWeekTask" />
    </div>
    <h2>Due this month:</h2>
    <div
      class="doThisMonth"
      v-for="(oneMonthTask, index) in oneMonthLeft"
      :key="index"
    >
      <Task :task="oneMonthTask" />
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

let tasks = [];

let oneDayLeft = [];
let oneWeekLeft = [];
let oneMonthLeft = [];

for (var i = 0; i < tasks.length; i++) {
  if (tasks[i].daysToComplete <= 1) {
    oneDayLeft.push(tasks[i]);
  } else if (tasks[i].id <= 7 && tasks[i].daysToComplete >= 2) {
    oneWeekLeft.push(tasks[i]);
  } else if (tasks[i].id >= 8) {
    oneMonthLeft.push(tasks[i]);
  }
}

export default {
  name: "TaskList",
  components: {
    Task
  },
  beforeMount: function() {
    this.$state.tasks;
  },
  computed: {
    // ...mapState({
    //   tasks: state => state.tasks
    // })
  }
};
</script>

<style lang="scss" scoped></style>
