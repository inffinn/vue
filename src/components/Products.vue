<template>
  <div class="products">
    <table>
      <thead>
      <th @click="sort(col)" v-for="col in columns">{{col}}
      </th>
      <th>actions</th>
      </thead>
      <tr v-for="row in products">
        <td v-for="item in row">{{item}}
        </td>
        <td>
        <button @click="inc(row)">+</button>
        <button v-if="row.count>0" @click="dec(row)">-</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapActions, mapState} from 'vuex';
  export default {
    name: 'Products',
    methods:{
      ...mapActions(['dec','inc','sort'])
    },
    computed:{
      ...mapState(['columns','products','sortData'])
    }
  }
</script>

<style scoped>

</style>
