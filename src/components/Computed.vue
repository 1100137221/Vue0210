<template>
    <div class="col-4 d-block mx-auto">
        <input v-model="initialValue" class="form-control">
        <input :value="computedValue" class="form-control mt-3" readonly>
        <button class="btn btn-danger mt-3"><span v-bind:class="iconClass"></span></button>
    </div>
</template>

<script>
export default {
  name: 'Computed',
  data: function() {
      return {
          initialValue: '',
      }
  },
  computed: {
      computedValue: function() {
          return Math.pow(2,this.initialValue);
      },
      iconClass: function() {
          return 'oi oi-'+this.initialValue;
      }
  }
}
</script>

