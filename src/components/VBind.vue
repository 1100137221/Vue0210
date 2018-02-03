<template>
  <div>
    <h1 v-bind:style="{ color: headingColor }">{{ headingColor }}</h1>
    <div class="col-4 d-block mx-auto">
        <input class="form-control" v-model="headingColor">
    </div>
  </div>
</template>

<script>
export default {
  name: 'VBind',
  data: function() {
      return {
          headingColor: 'Input the color.'
      }
  },
}
</script>

