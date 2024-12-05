<template>
  <div>
    <h2 >Test</h2>
    <div style="width: 200px; height: 500px; overflow-y: auto;">
      <ul>
      <li v-for="(item, index) in longList" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLongList } from '@/composables/useLongList'
const { longList } = useLongList(1000);
</script>
