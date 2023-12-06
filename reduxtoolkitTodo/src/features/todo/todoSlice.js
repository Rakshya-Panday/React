import {createSlice,nanoid} from "@reduxjs/toolkit"
//nanoid provide the unique id.

const initialState = {
    todos:[{id :1,text:"hello world"}]
}


//Slices are nothing but the advanced version of reducres and reducers are those where we define/defination our method and property.
export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        //state = give us access of our initial state  means the hand to hand suitation means vakhar tes ma k xa. update vako value in store.
        //action =  action give those value which we need to define a function
        addTodo :( state,action)=>{
         const todo = {
            id :nanoid(),
            text: action.payload
         }
         state.todos.push(todo)
        },
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})

export const {addTodo,removeTodo}= todoSlice.actions

export default todoSlice.reducer