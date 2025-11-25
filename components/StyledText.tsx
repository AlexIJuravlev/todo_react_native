import { COLORS } from "@/constants/ui.";
import { StyleSheet, Text, TextProps } from "react-native";

type StyledTextProps = TextProps & {
  variant?: "primary" | "title" | "subtitle" | "heading" | "small";
};

export const StyledText: React.FC<StyledTextProps> = ({
  style,
  variant = "primary",
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        variant === "title" ? styles.title : null,
        variant === 'subtitle' ? styles.subtitle : null,
        variant === 'heading' ? styles.heading : null,
        variant === 'small' ? styles.small : null,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PROMARY_TEXT,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "300",
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
});
