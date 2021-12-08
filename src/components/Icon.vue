<template>
  <svg
    :style="style"
    class="iconfont"
    aria-hidden="true">
    <use :xlink:href="'#icon-' + name"/>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'inherit'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      let obj = {
        color: this.color
      }
      if (this.size) {
        obj.fontSize = `${this.size}px`
      }
      return obj
    }
  }
}
</script>

<style lang="css">
  
.iconfont{
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
