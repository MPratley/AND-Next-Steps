export default {
  searchData({ state, commit }) {
    let searchResult = Object.values(state.faqs.data).filter(
      faq =>
        faq.Question && JSON.stringify(faq.Question).includes(state.searchTerm)
    );
    console.log(searchResult);
    commit("CHANGE_RESULTS", searchResult);
  },
  changeSearch({ commit }, text) {
    commit("CHANGE_SEARCH_TERM", text);
  }
};
