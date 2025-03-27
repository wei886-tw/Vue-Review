<template>
  <div class="container pt-32 mb-64">
    <h1 class="text-dark text-center mb-32">Todo List</h1>

    <div class="container mx-auto d-flex justify-content-center">
      <div class="input-group mb-32">
        <input
          type="text"
          class="form-control"
          placeholder="新增待辦事項"
          aria-label="新增待辦事項"
          aria-describedby="basic-addon2"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
        <span class="input-group-text" id="basic-addon2">
          <button class="btn" @click="addTodo">新增</button>
        </span>
      </div>
    </div>

    <div class="container">
      <ul class="list-unstyled">
        <li v-for="(todo, index) in todoList" :key="todo.id" class="mb-16 d-flex ">
          <div class="container ">{{index + 1 }}. {{ todo.thing }}</div>
          <div class="container d-flex justify-content-end">
            <button class="btn btn-light-gray" @click="deleteTodo(index)">刪除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      todoList: [],
      newTodo: '',
    }
  },

  methods: {
    addTodo() {
      this.todoList.push({ 'id': Date.now(), thing: this.newTodo })
      this.newTodo = ''
    },

    deleteTodo(index) {
      this.todoList.splice(index, 1)
    }
  },
}
</script>