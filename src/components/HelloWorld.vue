<template>
  <div class="hello">
    <debounce>
      <div @click="fn">
        <Demo>
          <div>ok</div>
        </Demo>
      </div>
    </debounce>
  </div>
</template>

<script>
import debounce from "../abstractComponents/demo.vue";
export default {
  name: 'HelloWorld',
  components: {
    debounce,
  },
  props: {
    msg: String
  },
  methods: {
    fn() {
      console.log('点击事件');
    },
  },
  created() {
    let a = this.$getWO();
    console.log(a);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
