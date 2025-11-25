import { StyledButton } from "@/components/StyledButton";
import { StyledTextInput } from "@/components/StyledInput";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

export const TodoCreator: React.FC<TodoCreatorProps> = ({onAddTodo}) => {
    const [text, setText] = useState('')
    const [inputError, setInputError] = useState(false)

    const onPressAdd = () => {
        if(!text){
            setInputError(true);
            return;
        }
        onAddTodo(text),
        setText('')
    }
  return (
    <View style={styles.container}>
      <StyledTextInput placeholder="Новая задача..." value={text} onChangeText={setText}/>
      <StyledButton label="+" onPress={onPressAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        gap: 10
    }
})


