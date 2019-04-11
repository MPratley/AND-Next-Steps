export default {
  searchData({ state, commit }) {
    let searchResult = Object.values(state.faqs.data).filter(
      faq =>
        JSON.stringify(faq.Question).includes(state.searchTerm) ||
        faq.Tags.some(tag => tag.includes(state.searchTerm))
    );
    console.log(searchResult);
    commit("CHANGE_RESULTS", searchResult);
  },
  changeSearch({ commit }, text) {
    commit("CHANGE_SEARCH_TERM", text);
  },
  resetSearch({ commit }) {
    commit("RESET_SEARCH_TERM");
  },
  addToFavourites({ commit }, faq) {
    commit("ADD_TO_FAVOURITES", faq);
  }
};
