import { StyledButton } from "@/components/StyledButton";
import { StyledTextInput } from "@/components/StyledInput";
import { StyledModal } from "@/components/StyledModal";
import { StyledText } from "@/components/StyledText";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
  title: Todo["title"];
};

export const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
  title,
}) => {
  const [updateTitle, setUpdateTitle] = useState(title);
  const [inputError, setInputError] = useState(false);


  const onPressSave = () => {
    if(!updateTitle){
        setInputError(true)
        return
    }
    setInputError(false)
    onUpdate(updateTitle)
    onClose()
  }
  return ( 
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <View style={styles.modalContent}>
        <StyledText variant="heading">EditTodo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput
            value={updateTitle}
            onChangeText={setUpdateTitle}
            placeholder="Отредактируйте задачу..."
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton label="Save" onPress={onPressSave} />
          <StyledButton label="Cancel" onPress={onClose} />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});
