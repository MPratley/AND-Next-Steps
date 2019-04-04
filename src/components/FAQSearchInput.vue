<template>
  <div class="search-input">
    <i class="material-icons search-icon">search</i>
    <input
      type="text"
      class="search-box"
      placeholder="Search or ask us a question"
    />
    <input type="submit" value="Search" class="searchButton" />
  </div>
</template>

<script>
export default {
  name: "searchinput"
};
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin: 0.5em 1em 0.5em 0.5em;
}

.search-icon {
  padding: 1rem;
}

.search-box {
  border: 0;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  justify-content: center;
  /* flex: 1; */
}

.searchButton {
  background-color: $and-blue;
  border: 0;
  color: white;
  padding: 0.5rem;
  border-radius: 0;
  // width: 10em;
  font-size: 1.1em;
}

input[type="text"] {
  font-size: 0.8em;
  width: 100%;
  /* padding: 20px; */
  box-sizing: border-box;
  /* padding-left: 40px; */
  border-radius: 7px;
}

md-icon {
  font-family: "Material Icons" !important;
}
</style>
