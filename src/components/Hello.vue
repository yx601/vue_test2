<template>
  <div>
    <h1>我是主页面</h1>
    <mytest msg="123"></mytest>
  </div>
</template>

<script>
import mytest from '@/components/mytest'

export default {
  name: 'Hello',
  components: {mytest}
}
</script>

<style scoped>

</style>
