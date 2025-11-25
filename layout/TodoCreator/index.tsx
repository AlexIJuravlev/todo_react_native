import { StyledButton } from "@/components/StyledButton";
import { StyledTextInput } from "@/components/StyledInput";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

export const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    onAddTodo(text), setText("");
  };

  useEffect(()=> {
    if(inputError && text){
      setInputError(false)
    }
  },[text])
  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Новая задача..."
        value={text}
        isError={inputError}
        onChangeText={setText}
      />
      <StyledButton label="+" onPress={onPressAdd} disabled={inputError} size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    gap: 10,
    margin: 10
  },
});
