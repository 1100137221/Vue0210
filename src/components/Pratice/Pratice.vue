<template src="./Pratice.html">
</template>

<script>
export default {
  name: 'Pratice',
  data: function() {
      return {
          playerHealth: 100,
          monsterHealth: 100,
          gameIsRunning: false,
          turns:[]
      }
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
    }
  }
}
</script>

