<template>
    <div>
        <button v-on:click="decrement">-</button>
        {{ count }}
        <button v-on:click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

  // Define the component in class-style
  @Component
export default class Counter extends Vue {
    // Class properties will be component data
    count = 0

    // Methods will be component methods
    increment(): any {
      // eslint-disable-next-line no-plusplus
      this.count++;
    }

    decrement() {
      // eslint-disable-next-line no-plusplus
      this.count--;
    }
}
</script>
