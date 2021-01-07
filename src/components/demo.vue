<template>
  <div class="demo-box">
    <div class="wo-demo-popup">
      this is div content!
    </div>
  </div>
</template>

<script>
  export default {
    // VUE3 功能
    // emits: {
    //   popup({ name }) {
    //     console.log('----L13---', name);
    //     return true;
    //   },
    // },
    mounted() {
      this.$emit('popup', {name: 'wo'});
    },
  }
</script>