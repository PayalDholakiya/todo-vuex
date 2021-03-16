<template>
  <div id="app" class="container">
    <TodoInput/>
    <TodoList/>
    <TodoItem/>
    </div>

  </div>
</template>
<script>
import TodoInput from '@/components/Todoinput'
import TodoList from '@/components/TodoList'; 
import TodoItem from '@/components/TodoItem'

export default {
 name:'App',
 components:{
   TodoInput,TodoList,TodoItem
 },

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
