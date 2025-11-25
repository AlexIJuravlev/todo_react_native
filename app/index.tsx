import { COLORS } from "@/constants/ui.";
import { Header } from "@/layout/Header";
import { TodoCreator } from "@/layout/TodoCreator";
import { TodoList } from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Купи молоко",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Протри пыль",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Дай леща коту. Любит",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Защита Up, UP, x, o, down",
    isCompleted: false,
  },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodo = (title: Todo["title"]) => {
    setTodos([...todos, { id: Number(new Date()), title, isCompleted: false }]);
  };

  const onPressDelete = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(todos.map((todo)=> (todo.id === id ? {...todo, isCompleted: !todo.isCompleted } : todo)))
  }

  const onUpdateTitle = (id: Todo['id'], title : Todo['title']) => {
    setTodos(todos.map((todo)=> (todo.id === id ? {...todo, title } : todo)))
  }
 
  const complitedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header
        totalTodos={todos.length}
        completedTodos={complitedTodos.length}
      />
      <TodoCreator onAddTodo={addTodo} />
        <TodoList todos={todos} onCheckTodo={onCheckTodo} onUpdateTitle={onUpdateTitle} onPressDelete={onPressDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PROMARY_BACKGROUND,
  },
});
