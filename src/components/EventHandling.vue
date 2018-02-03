<template>
    <div>
        <button v-on:click="changeState" class="btn btn-info mb-3"><span v-bind:class="icon"></span></button>
        <p v-on:mousemove="updateCoor">Coordinate: {{x}},{{y}}
            - <span v-on:mousemove.stop>Don't Update</span>
        </p>
        
        <p v-on:mousemove.self="updateCoor">Coordinate: {{x}},{{y}}
            - <span>Don't Update</span>
        </p>
    </div>
</template>

<script>
export default {
  name: 'EventHanding',
  data: function() {
      return {
          icon: 'oi oi-check',
          x: 0,
          y: 0,
      }
  },
  methods: {
      changeState: function() {
          this.icon = this.icon==='oi oi-check'?'oi oi-x':'oi oi-check';
      },
      updateCoor: function(event) {
          console.log(event);
          this.x = event.clientX;
          this.y = event.clientY;
      }
  }
}
</script>

