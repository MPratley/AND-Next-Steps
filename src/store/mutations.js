export default {
  updateAuthStatus(state, status) {
    state.isAuth = status;
  },
  CHANGE_RESULTS(state, searchResults) {
    state.filteredFaqs = searchResults;
  },
  CHANGE_SEARCH_TERM(state, text) {
    state.searchTerm = text;
  },
  RESET_SEARCH_TERM(state) {
    state.searchTerm = "";
  },
  ADD_TO_FAVOURITES(state, faq) {
    state.favouriteFaqs.push(faq);
  }
};
