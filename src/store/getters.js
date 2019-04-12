export default {
  getFaqs: state => state.faqs.data,
  getFilteredFaqs: state => state.filteredFaqs,
  getSearchTerm: state => state.searchTerm,
  getFavouriteFaqs: state => state.favouriteFaqs
  getXp: state => {
    return (
      (state.user.data.completedTasks.length /
        Object.keys(state.tasks.data).length) *
      100
    );
  }
};
