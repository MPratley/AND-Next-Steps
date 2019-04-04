<template>
  <div class="taskCard">
    <p>{{ task.name }}</p>
    <input type="checkbox" @click="toggle" v-model="done" />
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
    xp: Number
  },
  data() {
    return {
      done: false //this.$store.state.user.data.completedTasks.contains(this.task.id)
    };
  },
  methods: {
    toggle() {
      console.log(this.done);
      this.$store.dispatch("user/patch", {
        completedTasks: [
          ...this.$store.state.user.data.completedTasks,
          this.task.id
        ]
      });
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
