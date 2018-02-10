<template>
  <div>
      <p v-if="show">You can see me! <span>Hello!</span> </p>
      <p v-else>Now can see me!</p>
      <p v-show="show">Do you also see me?</p>
      <button @click="show = !show">switch</button>
  </div>
</template>

<script>
export default {
  name: 'VIf',
  data: function() {
      return {
          show: true
      }
  },
}
</script>

