import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  text: {},
});
