<template>
  <header class="header">
    <h1 class="header__title">Стаканы</h1>
    <nav class="navbar">
      <ul class="nav-links">
        <button
          v-for="tab in headerData.tabs"
          :key="tab"
          :class="['nav-links__button', { active: headerData.currentTab === tab }]"
          @click="switchTab(tab)"
        >
          {{ tab }}
        </button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['headerData'],
  name: 'NavBar',
  data: () => ({}),
  methods : {
    switchTab (tab) {
      this.$emit('switchTab', tab)
    }
  }
};
</script>

<style scoped>
  .header {
    background-color: #e2f34a;
  }
  .header__title {
    padding-left: 5%;
  }

  .navbar {
    width: 100%;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .nav-links__button {
    height: 100%;
    width: 100px;
    padding: 0 20px;
    line-height:  100%;
    border: none;
    background-color: #e2f34a;
  }
  .nav-links__button:focus {
    outline: none !important
  }

  .active {
    background-color: #919e1d;
    border: none;
  }
  .header {
    display: flex;
    flex-direction: row;
  }

  
  @media screen and (max-width: 380px) {
    .header__title {
      padding-left: 0;
      font-size: 20px;
    }
  }

</style>
