<template>
  <div class="search">
    <h2 class="title">How can we help you today?</h2>
    <SearchInput />
    <div class="faq-popular">
      <h2>Popular FAQs</h2>
      <ol>
        <li v-for="item in items">
          <strong>{{ item.title }}</strong>
          <p>{{ item.content }}</p>
        </li>
      </ol>
    </div>
    <button class="faq-all">Browse FAQs by Category</button>
  </div>
</template>

<script>
import SearchInput from "./SearchInput";

export default {
  name: "search",
  components: {
    SearchInput
  },
  data() {
    return {
      items: [
        {
          title: "How did Aydin land PDL?",
          content: "Pour-over plaid man braid pickled vaporware portland."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.search {
  justify-content: center;
}

.faq-popular {
  display: flex;
  flex-direction: column;
  border: 0.1em solid lightgray;
  border-radius: 7px;
  width: 80%;
  padding: 1.8em;
  margin: 0.5em 1em 0.5em 0.5em;
}

h2,
p {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.faq-all {
  background-color: $and-blue;
  color: #ffffff;
  height: 30px;
  border-radius: 5px;
}
</style>
