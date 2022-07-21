<template>
  <div id="Home">
    <Homedesc />
  </div>
</template>
<script>
import Homedesc from "../components/Homedesc.vue";
export default {
  components: {
    Homedesc,
  },
};
</script>
<style>
#Home {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(../../assets/landing-2.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
