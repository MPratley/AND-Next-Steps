export default {
  getFaqs: state => state.faqs.data,
  getFilteredFaqs: state => state.filteredFaqs,
  getSearchTerm: state => state.searchTerm,
  getFavouriteFaqs: state => state.favouriteFaqs
};
