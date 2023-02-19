import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    textDecorationLine: "underline",
    fontFamily: "Verdana",
  },
  inputHeadline: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: "Verdana",
    marginBottom: 5,
  },
  switchrow: {
    marginTop: 80,
    marginLeft: 20,
    color: "green",
  },
  textInputField: {
    fontFamily: "Verdana",
  },
  radioButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    fontFamily: "Verdana",
  },
  textCalculate: {
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
});

export const MyDarkTheme = StyleSheet.create({
  ...Styles,
  container: {
    ...Styles.container,
    backgroundColor: "hsl(0, 0%, 0%)",
  },
  textInputField: {
    ...Styles.textInputField,
    backgroundColor: "#ffffff",
  },
  headline: {
    ...Styles.headline,
    color: "#ffffff",
  },

  inputHeadline: {
    ...Styles.inputHeadline,
    color: "#ffffff",
  },
  textCalculate: {
    ...Styles.textCalculate,
    color: "#ffffff",
  },
  radioButtonStyle: {
    ...Styles.radioButtonStyle,
  },
  textGender: {
    ...Styles.textGender,
    color: "#ffffff",
  },
});

export const MyLightTheme = StyleSheet.create({
  ...Styles,
  container: {
    ...Styles.container,
    backgroundColor: "#ffffff",
  },
  textInputField: {
    ...Styles.textInputField,
    backgroundColor: "#99daee",
  },
  headline: {
    ...Styles.headline,
    color: "#000000",
  },
});