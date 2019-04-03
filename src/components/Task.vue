<template>
  <div class="taskCard">
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  }
};
</script>

<style lang="scss" scoped></style>
