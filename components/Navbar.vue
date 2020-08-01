<template>
  <div class="navbar">
    <div class="navbar-title">
      Named galaxies
    </div>
    <div class="navbar-sreach">
      <img class="navbar-sreach-icon" src="@/assets/searchIcon.svg" alt="#" />
      <input
        class="navbar-sreach-input"
        type="text"
        placeholder="Search galaxies"
        @input="searchGalaxies"
      />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    searchGalaxies(e) {
      this.$store.commit('searchGalaxies', e.target.value)
    },
  },
}
</script>
<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  &-title {
    color: #263238;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
  }
  &-sreach {
    position: relative;
    max-width: 270px;
    width: 100%;
    &-icon {
      position: absolute;
      left: 14px;
      top: 11px;
    }
    &-input {
      color: #909597;
      border: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      height: 36px;
      font-size: 14px;
      padding-left: 46px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: normal;
      max-width: 224px;
      width: 100%;
    }
  }
}
@media screen and (max-width: 960px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    &-title {
      margin-bottom: 15px;
    }
    margin-bottom: 0px;
  }
}
</style>
