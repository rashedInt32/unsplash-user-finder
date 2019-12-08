import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from '../constants/Colors';

export function GradientContainer({ children }) {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary, colors.tartiary]}
      style={styles.gradientContainer}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1
  },
});
