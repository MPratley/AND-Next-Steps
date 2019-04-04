const user = {
  firestorePath: "users/{userId}/",
  firestoreRefType: "doc",
  moduleName: "user",
  statePropName: "data",
  namespaced: true, // automatically added
  sync: {
    defaultValues: {
      completedTasks: []
    }
  },

  // this object is your store module (will be added as '/myModule')
  // you can also add state/getters/mutations/actions
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

export default user;
