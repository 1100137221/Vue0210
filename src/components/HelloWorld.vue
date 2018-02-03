<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="col-md-2 d-block mx-auto form-group">
      <input v-model="msg" class="form-control">
      <button v-on:click="changeMsg" class="btn btn-primary mt-3">改變msg</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      msg : 'Hello'
    }
  },
  methods: {
    changeMsg: function() {
      this.msg = 'Changed!';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
