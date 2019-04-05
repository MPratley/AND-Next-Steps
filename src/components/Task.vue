<template>
  <div class="taskCard">
    <p>{{ task.name }}</p>
    <input type="checkbox" @click="toggle" v-model="isCompleted" />
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
    isCompleted() {
      try {
        return this["user/getCompletedTasks"].includes(this.task.id);
      } catch (err) {
        return false;
      }
    }
  },
  methods: {
    toggle() {
      if (!this.isCompleted) {
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
