<template>
  <div class="taskCard" :class="{ hide: hideTask }">
    <div class="mdc-form-field">
      <label class="label" :for="task.id" :class="{ done: isCompleted }">{{
        task.name
      }}</label>
      <div class="mdc-checkbox">
        <input
          type="checkbox"
          class="mdc-checkbox__native-control"
          :id="task.id"
          v-model="isCompleted"
        />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            ></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Task",
  props: {
    task: Object,
    hideCompleted: Boolean
  },
  data() {
    return {};
  },
  computed: {
    hideTask() {
      return this.hideCompleted && this.isCompleted;
    },
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
@import "@material/form-field/mdc-form-field";
@import "@material/checkbox/mdc-checkbox";

label {
  font-size: 16px;
}

.mdc-form-field {
  width: 100%;
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background {
  background-color: $and-blue;
  border-color: $and-blue;
}

.done {
  text-decoration: line-through;
  color: grey;
}

.hide {
  display: none;
}
</style>
