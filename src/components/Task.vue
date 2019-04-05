<template>
  <div class="taskCard">
    <p>{{ task.name }}</p>
    <input type="checkbox" v-model="isCompleted" />
    <!-- <p>{{isCompleted}}</p> -->
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
  },
  methods: {
    // toggle(bool) {}
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
.checkbox {
  margin: 12px;
}
</style>
