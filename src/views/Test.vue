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
import { onMounted, ref } from "vue";

function createArray(sizeInMB = 10) {
  const sizeInBytes = sizeInMB * 1024 * 1024; // 10 * 1024 * 1024

  // 创建类型数组
  const data = new Uint8Array(sizeInBytes);

  // 填充数组（可选）
  for (let i = 0; i < data.length; i++) {
    data[i] = i % 256; // 示例：用 0-255 的数字填充
  }
  return data;
}

function createList(count: number, callback: Function) {
  return Array.from({ length: count }).map(() => callback());
}

const longList = ref<string[]>([]);
let bigArray: Uint8Array = new Uint8Array(0);

onMounted(() => {
  longList.value = createList(1000, () => "0123456789");
  bigArray = createArray(10);  
  console.log(bigArray.length);
});
</script>
