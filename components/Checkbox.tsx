import { COLORS } from "@/constants/ui.";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

type StyledCheckboxProps = {
  checked: boolean;
  onCheck: () => void;
};

export const StyledCheckbox: React.FC<StyledCheckboxProps> = ({
  checked,
  onCheck,
}) => {
  return <TouchableOpacity onPress={onCheck}>
    <Ionicons name={checked ? 'checkmark-circle' : 'ellipse-outline'} size={25} color={checked ? COLORS.SUCCESS : COLORS.PROMATY_BORDER}/>
  </TouchableOpacity>;
};
