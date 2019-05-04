<template>
  <div class="total">{{total}}</div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Total',
    computed: {
      ...mapGetters(['total']),
    }
  }
</script>

<style scoped>

</style>
