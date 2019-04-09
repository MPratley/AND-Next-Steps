export default {
  getXp: state => {
    return parseInt(
      (state.user.data.completedTasks.length /
        Object.keys(state.tasks.data).length) *
        100
    );
  }
};
