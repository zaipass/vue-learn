<template>
  <div class="demo-box">
    <div class="wo-demo-popup">
      this is div content!
    </div>
  </div>
</template>

<script>
  import { obj } from '../observe.js'
  export default {
    // VUE3 功能
    // emits: {
    //   popup({ name }) {
    //     console.log('----L13---', name);
    //     return true;
    //   },
    // },
    methods: {
      demoFunc(param) {
        if (!param.sex) {
          param.sex = 'man'
        } else {
          param.age = '18'
        }
        console.log('demo.vue=====L21', param)
      },
      test() {
        obj.listen('demo', this.demoFunc)
      },
    },
    mounted() {
      console.log(obj, '=======L28')
      // this.test()
      this.test.before(this.demoFunc).before(this.demoFunc)({name: 'wo'})
      // this.$emit('popup', {name: 'wo'});
    },
  }
</script>