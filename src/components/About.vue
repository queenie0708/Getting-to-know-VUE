<template>
  <div class="about">
    <h3>Hello {{their_name}}, Hope you can have fun</h3>
    <p>Play with Queenie</p>
  </div>
</template>

<script>
export default {
  name: 'lines',
  data(){
    return {
      their_name:this.$route.params.name
    }
  }
}

</script>
