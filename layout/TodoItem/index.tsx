import { StyledCheckbox } from "@/components/Checkbox";
import { StyledButton } from "@/components/StyledButton";
import { StyledText } from "@/components/StyledText";
import { COLORS } from "@/constants/ui.";
import { StyleSheet, View } from "react-native";

type TodoItemProps = {
  title: string;
  isCompleted: boolean;
};

export const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={false} onCheck={() => {}} />

        <StyledText style={isCompleted && styles.completedText}>
          {title}
        </StyledText>
      </View>
      <View style={styles.controlPanel}>
        <StyledButton icon="pencil" size="small" />
        <StyledButton icon="trash" size="small" variant="delete" />
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
  checkTitleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
});
