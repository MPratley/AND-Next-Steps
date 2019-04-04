<template>
  <div class="taskCard">
    <p>{{ task.name }}</p>
    <input type="checkbox" v-on:click="manageXp()" />
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
    xp: Number
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
