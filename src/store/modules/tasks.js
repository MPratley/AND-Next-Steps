const tasks = {
  firestorePath: "tasks",
  firestoreRefType: "collection", // or 'doc'
  moduleName: "tasks",
  statePropName: "data",
  namespaced: true, // automatically added

  // this object is your store module (will be added as '/tasks')
  // you can also add state/getters/mutations/actions
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

export default tasks;
