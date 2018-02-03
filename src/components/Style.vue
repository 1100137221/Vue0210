<template>
    <div class="col-4 d-block mx-auto">
        <button class="btn btn-primary mb-3" @click="attachedRed = !attachedRed"><span class="oi oi-check"></span></button>
        <input class="form-control mb-3" v-model="labelColor">
        <div class="row justify-content-between">
            <div class="colorField" style="opacity:0.1;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.2;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.3;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.4;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.5;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.6;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.7;" :style="divStyles" :class="{red : attachedRed}"></div>
            <div class="colorField" style="opacity:0.8;" :style="divStyles" :class="{red : attachedRed}"></div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'Computed',
  data: function() {
      return {
          attachedRed: false,
          labelColor: 'grey'
      }
  },
  computed: {
      divClass: function() {
          return {
              red: this.attachedRed,
              yg: !this.attachedRed
          }
      },
      divStyles: function() {
          return {
              backgroundColor: this.labelColor
          }
      }
  }
}
</script>

<style scoped>

.colorField {
    height: 200px;
    width: 50px;
    background-color: grey;
}

.red {
    background-color: red;
}

.yg {
    background-color: yellowgreen;
}

</style>


