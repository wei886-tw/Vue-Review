<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="increment">點擊計數: {{ count }}</button>
  </div>
</template>

<script>
export default {
  // 組件名稱（可選）
  name: 'App',
  // 響應式數據
  data() {
    return {
      message: '歡迎使用 Vue 3',
      count: 0
    };
  },
  // 方法
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 60px;
}
h1 {
  color: #2c3e50;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>