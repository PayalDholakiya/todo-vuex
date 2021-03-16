<template>
    <div>
       <h1>Todo</h1>
       <div class="row">
        <input  @change="todoTextChange" :value="todoText" class="col form-control mx-2" type="text"/>
        <button  @click="addTodoI" class="btn btn-primary">Add</button>
       </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import { v1 } from "uuid"

export default {
data(){
return{
    todotext:""
 }
 },

 methods:{
     ...mapActions(["addTodo"]),
    todoTextChange(e){
        this.todoText = e.target.value
    },
     addTodoI(){
         this.addTodo({
             id:v1(),
             title: this.todoText
         });
         this.todotext=""
     }
 }
   
};
</script>
<style scoped>
.col,.btn{
    margin-top: 10%;
}
</style>