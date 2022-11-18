<template>
  <div>
    <button @click="btnClick">按钮21</button>
  </div>
</template>

<script>
export default {
  name: 'YButton',
  methods: {
    btnClick () {
      console.log('click')
    }
  }
}
</script>

<style scoped>

</style>
