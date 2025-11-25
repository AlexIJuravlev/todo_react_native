import { StyledText } from "@/components/StyledText";
import { COLORS } from "@/constants/ui.";
import React from "react";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
    totalTodos: number,
    completedTodos: number
}

export const Header: React.FC<HeaderProps> = ({totalTodos, completedTodos}) => {
  const data = new Date().toLocaleDateString("ru");

  return (
    <View style={styles.container}>
      <View style = {styles.headerMyContent}>
        <StyledText>Todo</StyledText>
        <StyledText>{data}</StyledText>
      </View>
      <StyledText>Выполнено {completedTodos} / {totalTodos} </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMyContent: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
});
