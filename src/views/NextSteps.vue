<template>
  <div class="next-steps">
    <h1>Next Steps</h1>
    <TaskList></TaskList>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
export default {
  name: "faq",
  components: {
    TaskList
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
}
</style>
