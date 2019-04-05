const user = {
  firestorePath: "users/{userId}/",
  firestoreRefType: "doc",
  moduleName: "user",
  statePropName: "data",
  namespaced: true, // automatically added
  sync: {
    defaultValues: {
      completedTasks: [],
      xp: 0
    }
  },

  // this object is your store module (will be added as '/myModule')
  // you can also add state/getters/mutations/actions
  state: {},
  getters: {
    getCompletedTasks: state => {
      return state.data.completedTasks;
    },
    getXp: state => {
      return state.data.xp;
    }
  },
  mutations: {},
  actions: {}
};

export default user;
