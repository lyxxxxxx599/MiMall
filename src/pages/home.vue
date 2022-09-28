<template>
  <div>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";

export default {
  name: "home",
  components: {
    NavHeader,
    NavFooter,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>