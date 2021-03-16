<template>
    <div>
       <div class="row my-3 justify-content-between">
        <h3 v-if="!editing">{{todo.title}}</h3>
        <input :value="todoText" @change="todoTextChange" v-else type="text" class="col form-control">
        <div>
            <button @click="updateI(todo)" class="btn btn-primary mx-2">{{editing?'update':'Edit'}}</button>
            <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
        </div>
       </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props:{
      todo:{ }
  },
  data(){
      return{
          todoText:"",
          editing:false
      }
  },
methods:{
    ...mapActions(['deleteTodo','update']),
    todoTextChange(e){
        this.todoText = e.target.value;
    },
    updateI(todo){
        this.editing = this.editing == true?false:true;
        if(this.editing){
            this.todoText = todo.title;
            this.update(todo)
        }else{
            todo.title = this.todoText;
        }
        
    }

}
}
</script> 