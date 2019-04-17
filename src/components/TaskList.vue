<template>
  <div class="taskList">
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
        <Task :task="task" :hideCompleted="hideCompleted" />
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
        <Task :task="task" :hideCompleted="hideCompleted" />
      </div>
    </div>
    <h2>Due this month:</h2>
    <div class="doThisMonth" v-for="(task, index) in tasks" :key="index">
      <div class="ifToday" v-if="task.daysToComplete >= 8">
        <Task :task="task" :hideCompleted="hideCompleted" />
      </div>
    </div>

    <button
      id="removeCompletedButton"
      class="mdc-fab mdc-fab--extended"
      @click="toggleCompletedTasks"
    >
      <span class="mdc-fab__label">Remove Completed Tasks</span>
    </button>
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
    // ...mapGetters(["user/getCompletedTasks"])
  },
  data() {
    return {
      hideCompleted: false
    };
  },
  methods: {
    toggleCompletedTasks: function() {
      if (this.hideCompleted == false) {
        this.hideCompleted = true;
        document.getElementById("removeCompletedButton").innerHTML =
          "Show Completed Tasks";
      } else {
        this.hideCompleted = false;
        document.getElementById("removeCompletedButton").innerHTML =
          "Remove Completed Tasks";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@material/fab/mdc-fab";

h2 {
  color: $and-blue;
  font-weight: 800;
}
.mdc-fab[data-v-189e9673] {
  margin: 12px auto;
  display: block;
  background-color: $and-red;
}
.taskList {
  margin-bottom: 70px;
}
.removeTask {
  display: none;
}
</style>
