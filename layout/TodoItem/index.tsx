import { StyledCheckbox } from "@/components/Checkbox";
import { StyledButton } from "@/components/StyledButton";
import { StyledText } from "@/components/StyledText";
import { COLORS } from "@/constants/ui.";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { EditTodoModal } from "../Modals/EditTodoModal";

type TodoItemProps = Todo & {
  onPressDelete: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  onCheckTodo,
  onPressDelete,
  onUpdateTitle,
}) => {
  const [isEditOpenModal, setEditOpenModal] = useState(false)

  const onPressCheck = () => {
    onCheckTodo(id)
  }

  const onDelete = () => {
    onPressDelete(id)
  }

  const isOpenModal = () => {
    setEditOpenModal(true)
  }
  return (
    <View style={[styles.container]}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onCheck={onPressCheck} />

        <StyledText style={isCompleted && styles.completedText}>
          {title}
        </StyledText>
      </View>
      <View style={styles.controlPanel}>
        <StyledButton icon="pencil" size="small" onPress={isOpenModal} />
        <EditTodoModal title={title} isOpen={isEditOpenModal} onClose={() => setEditOpenModal(false)} onUpdate={(title) => onUpdateTitle(id, title)}/>
        <StyledButton icon="trash" size="small" variant="delete" onPress={onDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  completedText: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
  controlPanel: {
    flexDirection: "row",
    gap: 5,
  },
  checkTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
