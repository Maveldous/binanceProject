<template>
  <div id="app">
    <navBar
      :headerData="headerData"
      @switchTab="tab => (this.headerData.currentTab = tab)"
      class="navbar"
    />
    <keep-alive>
      <component class="content" :is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import navBar from "./components/NavBar.vue";

export default {
  name: "app",
  data: () => ({
    headerData: {
      tabs: ["GlassState", "DiffList"],
      currentTab: "GlassState",
    },
  }),
  computed: {
    currentTabComponent() {
      return this.headerData.currentTab;
    }
  },
  components: {
    navBar,
    GlassState : () => import('./components/GlassState.vue'),
    DiffList :   () => import('./components/DiffList.vue'),
  },

};
</script>

<style>
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

</style>
