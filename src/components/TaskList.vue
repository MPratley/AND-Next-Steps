<template>
  <div class="taskList">
    <h1>Task List</h1>

    <!-- <h2>Overdue:</h2> -->

    <h2>Due today:</h2>
    <div
      class="doThisToday"
      v-for="(task, index) in tasks"
      :key="index + '- 1DaysLeft'"
    >
      <div
        class="ifThisToday"
        v-if="task.daysToComplete <= 1 && task.daysToComplete > -1"
      >
        <Task :task="task" />
      </div>
    </div>
    <h2>Due this week:</h2>
    <div
      class="doThisWeek"
      v-for="(task, index) in tasks"
      :key="index + '- 7DaysLeft'"
    >
      <div
        class="ifThisWeek"
        v-if="task.daysToComplete >= 2 && task.daysToComplete <= 7"
      >
        <Task :task="task" />
      </div>
    </div>
    <h2>Due this month:</h2>
    <div class="doThisMonth" v-for="(task, index) in tasks" :key="index">
      <div class="ifToday" v-if="task.daysToComplete >= 8">
        <Task :task="task" />
      </div>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import { mapState } from "vuex";

export default {
  name: "TaskList",
  components: {
    Task
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.data
    })
  }
};
</script>

<style lang="scss" scoped>
.taskList {
  margin-bottom: 54px;
}
</style>
