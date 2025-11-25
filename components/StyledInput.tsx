import { COLORS } from "@/constants/ui.";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInputProps = TextInputProps & {
  isError?: boolean;
};

export const StyledTextInput: React.FC<StyledTextInputProps> = ({
  isError,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, props.style, isError ? styles.error : null]}
      {...props}
      placeholderTextColor={COLORS.PLACEHOLDER}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PROMATY_BORDER,
    color: COLORS.PROMARY_TEXT,
  },
  error: {
    borderColor: COLORS.PROMARY_RED,
  },
});
