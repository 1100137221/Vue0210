<template>
    <div class="col-4 d-block mx-auto">
        <div class="row justify-content-around">
            <button :disabled="leftDisable" @click="counter--" class="btn btn-success"><span class="oi oi-arrow-left"></span></button>
            <h4>{{counter}}</h4>
            <button :disabled="rightDisable" @click="counter++" class="btn btn-success"><span class="oi oi-arrow-right"></span></button>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Computed',
  data: function() {
      return {
          counter: 5,
          leftDisable: false,
          rightDisable: false
      }
  },
  watch: {
      counter: function(value) {
          if(value > 9) {
              this.rightDisable = true;
          }
          else if(value < 1) {
              this.leftDisable = true;
          }
          else
          {
              this.leftDisable = false;
              this.rightDisable = false;
          }
      }
  }
}
</script>

