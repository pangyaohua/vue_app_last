<template>
<div class="item">
  <header>
    <span class="iconfont icon-fangdajing"></span>
    <em>{{title}}</em>
  </header>
  <section>
    内容
  </section>
  <footer>
    页脚
  </footer>
</div>
</template>

<script>
    export default {
        mixins:[window.mixin],
        name: "item",
        data(){
            return{
              title:this.$store.state.itemTitle
            }
        },
      methods:{

      }
    }
</script>

<style>

</style>
