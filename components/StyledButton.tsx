import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { StyledText } from "./StyledText";
import React from "react";
import { COLORS } from "@/constants/ui.";
import { Ionicons } from "@expo/vector-icons";
import { Todo } from "@/types/todo";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
  variant?: "primary" | "delete";
};

export const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = "default",
  variant = "primary",
  disabled,
  ...props
}) => {
  const textVariant = (() => {
    if (size === "large") {
      return "heading";
    }
    return "small";
  })();

  return (
    <TouchableOpacity
      style={[
        styles.base,
        size === "small" ? styles.small : null,
        size === "large" ? styles.large : null,
        variant === "delete" ? styles.delete : null,
        disabled ? styles.disabled : null,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText variant={textVariant}>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PROMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PROMARY_ACTIVE,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
  //Size
  small: {
    paddingHorizontal: 12,
  },
  large: {
    paddingHorizontal: 30,
  },
  //Variant
  delete: {
    backgroundColor: COLORS.PROMARY_RED,
  },
});
