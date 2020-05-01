<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";
export default {
  name: "App",
  components: Navigator,
  data() {
    return {};
  },
  methods: {}
};
</script>
