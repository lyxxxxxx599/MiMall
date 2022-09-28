<template>
  <div>
    <router-view></router-view>
    <ServiceBar></ServiceBar>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import ServiceBar from "@/components/ServiceBar.vue";
import NavFooter from "@/components/NavFooter.vue";
export default {
  name: "order",
  components: {
    ServiceBar,
    NavFooter,
  },
  data() {
    return {
        title:'',
        tip:''
    };
  },
};
</script>

<style lang="scss" scoped>
</style>