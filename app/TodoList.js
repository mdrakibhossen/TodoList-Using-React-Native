import React from "react";
import { View, Text } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  // const todosList =todos.map((todo, i)=>{
  //     return (<Todo
  //             deleteTodo={deleteTodo}
  //             toggleComplete={toggleComplete}
  //             key={todo.todoIndex}
  //             todo={todo} />);
  // }


  const getVisibleTodos = (todos, type) => {
    switch (type){
      case 'All':
        return todos
      case 'Complete':
        return todos.filter((t) => t.complete)
      case 'Activate':
        return todos.filter((t) => !t.complete)
    }
  }

  todos=getVisibleTodos(todos, type);

  console.log(type);

  return (
    <View>
      {todos?.map((todo) => (
        <Todo
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          key={todo.todoIndex}
          todo={todo}
        />
        // <Text key={todo.todoIndex}>{todo.title}</Text>
      ))}
    </View>
  );
};

export default TodoList;
