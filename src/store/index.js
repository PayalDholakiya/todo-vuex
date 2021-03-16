import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    {
      id: 1,
      title:"one"
      },
      {
      id: 2,
      title:"two"
      },
      {
      id:3,
      title:"three"
    },
    ],
  },
  getters: {
    allTodos :(state)=>state.todos,
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
      console.log()    
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id)
      console.log(index);
    }
   
  },
  actions: {
    addTodo({ commit }, todo)
    {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
    },
     update({ commit },todo) {
       commit("update_todo", todo);
    }
  },
  modules: {
  }
})
