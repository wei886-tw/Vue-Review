<template>
  <div class="container pt-32 mb-64 " style="max-width: 768px;">
    <h1 class="text-dark text-center mb-32 fs-64">Todo List</h1>
    <div class="container-md mx-auto  px-4" >
      <div class="input-group mb-32">
        <input
          type="text"
          class="form-control"
          placeholder="新增待辦事項"
          aria-label="新增待辦事項"
          aria-describedby="basic-addon2"
          v-model="newTodo"
          @keyup.enter="handleEnter"
        />
        <span class="input-group-text" id="basic-addon2">
          <button class="btn" @click="addTodo">新增</button>
        </span>
      </div>
    </div>

    <div class="container-md mb-32 border rounded" style="height: 35vh; overflow-y: auto">
      <h2 class="text-center mb-16 pt-16">待辦事項：</h2>
      <ul class="list-unstyled">
        <li v-for="(todo, index) in todoList" :key="todo.id" class="mb-16 d-flex">
          <div class="container-md">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                :id="'todo-' + index"
                v-model="todo.done"
                @click="addDoneList(index)"
              />
              {{ todo.thing }}
              <label class="form-check-label" for="'todo-' + index"> </label>
            </div>
          </div>
          <div class="container-md d-flex justify-content-end">
            <button class="btn btn-light-gray" @click="deleteTodo(index)">刪除</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="container-md border rounded" style="height: 20vh; overflow-y: auto">
      <h2 class="text-center mb-16 pt-16">完成事項：</h2>
      <ul>
        <li
          v-for="(done, index) in doneList"
          :key="index + 1"
          style="text-decoration: line-through"
        >
          {{ done }}
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
      doneList: [],
      newTodo: '',
      enterCount: 0,
      lastEnterTime: 0,
    }
  },

  methods: {
    addTodo() {
      if (this.newTodo === '') {
        alert('請勿輸入空的待辦事項')
        return
      }
      this.todoList.push({ id: Date.now(), thing: this.newTodo, done: false })
      this.newTodo = ''
      alert('新增成功')
    },

    deleteTodo(index) {
      confirm('確定刪除此項待辦？')
      this.todoList.splice(index, 1)
    },

    addDoneList(index) {
      this.doneList.push(this.todoList[index].thing)
      this.todoList.splice(index, 1)
    },

    handleEnter() {
      const currentTime = Date.now()
      const timeGap = currentTime - this.lastEnterTime
      // 如果 timeGap 小於 300 ms ，就當作雙擊；不是當作單擊。
      if (timeGap > 2000) {
        this.enterCount = 1
      } else {
        this.enterCount++
      }
      this.lastEnterTime = currentTime

      // 如果 enterCounter === 2 ，就可以存到待辦事項
      if (this.enterCount >= 2) {
        this.addTodo()
      }
    },
  },
}
</script>