import { StatusBar } from "expo-status-bar";
import { ScrollView, View, TouchableOpacity } from "react-native";
import Styles, { MyDarkTheme, MyLightTheme } from "./styles/Styles.js";
import {
  MD3LightTheme,
  Provider,
  Text,
  Button,
  TextInput,
  Switch,
  RadioButton,
} from "react-native-paper";
import NumericInput from 'react-native-numeric-input';
import { useState } from "react";

export default function App() {
  const [quantityBottles, setquantityBottles] = useState(0);
  const [quantityHours, setquantityHours] = useState(0);
  const [weight, setweight] = useState(0);
  const liters = quantityBottles * 0.33;
  const grams = liters * 8 * 4.5;
  const burning = weight / 10;
  const resultMale = (grams / (weight * 0.7)).toFixed(2);
  const resultFemale = (grams / (weight * 0.6)).toFixed(2);
  const [condition, setCondition] = useState(true);
  const [promille, setPromille] = useState(0);
  const [gender, setgender] = useState(0);
  const [on, isOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const textColor =
    promille >= 0 && promille < 1
      ? "green"
      : promille >= 1 && promille < 2
      ? "orange"
      : "red";

  const functionCalculate = () => {
    if (!weight) {
      alert("Please enter your weight");
      return;
    }
    if (!gender) {
      alert("Please select your gender");
      return;
    }
    {
      gender == "male"
        ? setPromille((grams / (weight * 0.7)).toFixed(2))
        : setPromille((grams / (weight * 0.6)).toFixed(2));
    }
  };

  const myStyle = isDarkMode ? MyDarkTheme : MyLightTheme;

  return (
    <ScrollView style={myStyle.container}>
      <Switch
        style={myStyle.switchrow}
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
      />

      <Text style={myStyle.headline}>Alcometer</Text>
      <Text style={myStyle.inputHeadline}>Weight</Text>

      <TextInput
        style={myStyle.textInputField}
        keyboardType="number-pad"
        onChangeText={(q) => setweight(q)}
        value={weight}
        minValue={0}
      />

      <Text style={myStyle.inputHeadline}>Bottles</Text>

      <NumericInput
        style={myStyle.numInput}
        onChange={(q) => setquantityBottles(q)}
        minValue={0}
        type="plus-minus"
        borderColor={isDarkMode ? '#ffffff' : '#000000'}       
        textColor={isDarkMode ? '#ffffff' : '#000000'} 
      ></NumericInput>

      <Text style={myStyle.inputHeadline}>Hours</Text>

      <NumericInput
        style={myStyle.numInput}
        onChange={(q) => setquantityHours(q)}
        minValue={0}
        type="plus-minus"
        borderColor={isDarkMode ? '#ffffff' : '#000000'} 
        textColor={isDarkMode ? '#ffffff' : '#000000'} 
      ></NumericInput>

      <Text style={myStyle.inputHeadline}>Select your gender: </Text>

      <RadioButton.Group onValueChange={(val) => setgender(val)} value={gender}>
        <View style={myStyle.radioButtonStyle}>
          <Text style={myStyle.textGender}>Male</Text>
          <RadioButton value="male" />
          <Text style={myStyle.textGender}>Female</Text>
          <RadioButton value="female" />
        </View>
      </RadioButton.Group>

      <Text style={{ color: textColor, textAlign:"center", backgroundColor: "white", marginLeft: 100,marginRight: 100, fontFamily: "Verdana" }}>
        Die Promilleanzahl ist: {promille}
      </Text>

      <TouchableOpacity onPress={functionCalculate}>
        <Text style={myStyle.textCalculate}>CALCULATE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
