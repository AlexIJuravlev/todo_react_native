import { Todo } from "@/types/todo";
import { FlatList, StyleSheet, View } from "react-native";
import { TodoItem } from "../TodoItem";

type TodoListProps = {
  todos: Todo[];
  onPressDelete: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCheckTodo,
  onUpdateTitle,
  onPressDelete,
}) => {
  return (
    <FlatList
      style={styles.container}
      data={todos}
      keyExtractor={(todo) => todo.id.toString()}
      renderItem={({ item }) => (
        <TodoItem
          id={item.id}
          title={item.title}
          isCompleted={item.isCompleted}
          onCheckTodo={onCheckTodo}
          onUpdateTitle={onUpdateTitle}
          onPressDelete={onPressDelete}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
