<template>
    <div class="col-4 d-block mx-auto">
        <input @keyup.enter.space="submitThis" v-model="nowEdit" class="form-control">
        <ul class="list-group mt-3" id="list">
        </ul>
    </div>
</template>

<script>
export default {
  name: 'KeyboardEvent',
  data: function() {
      return {
          nowEdit: 'Something'
      }
  },
  methods: {
      submitThis: function() {
          let listDom = document.querySelector("#list");
          let newLi = document.createElement("li");
          let textNode = document.createTextNode(this.nowEdit);
          newLi.className = "list-group-item";
          newLi.appendChild(textNode);
          listDom.appendChild(newLi);
          this.nowEdit = '';
      }
  }
}
</script>

