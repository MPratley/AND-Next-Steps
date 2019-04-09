<template>
  <div class="next-steps">
    <UserHeader></UserHeader>
    <XpBar></XpBar>
    <TaskList></TaskList>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";
import XpBar from "@/components/XpBar.vue";
import UserHeader from "@/components/UserHeaderBar.vue";

export default {
  name: "NextSteps",
  components: {
    TaskList,
    XpBar,
    UserHeader
  },
  created() {
    this.$store.dispatch("tasks/openDBChannel");
  }
};
</script>

<style lang="scss">
.next-steps {
  width: 100%;
}

h1 {
  color: $color-foreground;
}
</style>
