export default {
  updateAuthStatus(state, status) {
    state.isAuth = status;
  },
  FILTERED_FAQS(state, word) {
    if (!word || word === "{}") {
      state.searchWord = null;
      state.filteredFaqs = null;
    } else {
      state.searchWord = word;
      let newWord = word.trim().toLowerCase();
      state.filteredFaqs = state.faqs.filter(faq => {
        return faq.question.toLowerCase().includes(newWord);
      });
    }
  }
};
