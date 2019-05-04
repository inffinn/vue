<template>
  <div class="services">
    <table>
      <thead>
      <th v-for="col in columns">{{col}}
      </th>
      </thead>
      <tr v-for="row in services">
        <td v-for="item in row">{{item}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Sevices',
    computed: {
      ...mapState(['columns', 'services'])
    }
  }
</script>

<style scoped>

</style>
