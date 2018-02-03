<template>
  <div>
    <p v-html="link"></p>
  </div>
</template>

<script>
export default {
  name: 'VHtml',
  data: function() {
      return {
          link: `<a href="http://www.google.com">Link</a>`
      }
  },
}
</script>

