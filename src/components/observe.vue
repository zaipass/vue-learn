<!-- 发布-订阅 -->
<template>
  <div>
    <button @click="trigger">触发</button>
  </div>
</template>

<script>
  import { obj } from '../observe.js'
  export default {
    created() {
    },
    methods: {
      trigger() {
        /** 触发订阅 */
        // console.log(this.$http);
        obj.trigger('demo')
        obj.trigger('key1')
      },
    },
  }
</script>