<template>
  <div id="app">
    <!-- <Navigator /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";
export default {
  name: "App",
  components: Navigator
};
</script>
