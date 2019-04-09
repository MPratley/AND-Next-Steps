<template>
  <div class="taskCard">
    <label class="label" :for="task.id" :class="{ done: isCompleted }">{{
      task.name
    }}</label>
    <input type="checkbox" :id="task.id" v-model="isCompleted" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Task",
  props: {
    task: Object
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user/getCompletedTasks"]),
    isCompleted: {
      get() {
        try {
          return this["user/getCompletedTasks"].includes(this.task.id);
        } catch (error) {
          return false;
        }
      },
      set(add) {
        if (add) {
          this.$store.dispatch("user/patch", {
            completedTasks: [...this["user/getCompletedTasks"], this.task.id]
          });
        } else {
          var cTasks = this["user/getCompletedTasks"];
          cTasks.splice(cTasks.indexOf(this.task.id), 1);
          this.$store.dispatch("user/patch", {
            completedTasks: cTasks
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.taskCard {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  align-content: center;
}

label {
  font-size: 16px;
  margin: 12px;
}

.done {
  text-decoration: line-through;
  color: grey;
}
</style>
