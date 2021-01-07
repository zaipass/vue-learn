<!-- 抽象组件 -->
<script>
  import { get, set } from "lodash";
  export default {
    name: 'demo',
    abstract: true,  // 标记为抽象组件
    methods: {
      debounce(fn, delay) {
        /** 防抖: 一段时间内如果再次触发,则删除之前的方法调用 */
        let timer = undefined;
        return function () {
          // let _this = this;
          let args = arguments;
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            fn.call(this, ...args);
          }, delay);
        };
      },
    },
    render() {
      /** 渲染=>在未设置 abstract: true 的组件中不起作用 */
      let vnode = this.$slots.default;
      if (vnode) {
        let innerNode = vnode[0];
        let evt = get(innerNode, 'data.on.click');
        if (typeof evt === 'function') {
          set(innerNode, 'data.on.click', this.debounce(evt, 2000));
        }
      }
      console.log(vnode);
      return vnode;
    },
  }
</script>