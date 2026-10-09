import { Alert, Button, Text, TextInput, View } from "react-native";
import CustomLabel from "./src/components/CustomLabel";
import { useState } from "react";

function App() {
  console.log("Hello");

  function click(value: any) {
    console.log(value);
  }

  const [count, setCount] = useState(0);

  function changeCount() {
    setCount(count + 1);
  }

  var x = 0;

  function changeX() {
    x = x + 1;
    console.log(x);
  }

  // var username = '';
  const [username, setUsername] = useState("");

  function displayUsername() {
    console.log("username:" + username);
    Alert.alert("Username", username);
  }

  function onChangeUsername(v: string) {
    setUsername(v);
  }
  var cal = {
    number1: 0,
    number2: 0,
    addition: function () {
      console.log(this.number1 + this.number2);
    },
    subtraction: function () {
      console.log(this.number1 - this.number2);
    },
  };

  function addNumber() {
    cal.number1 = 30;
    cal.number2 = 20;
    cal.addition();
    cal.subtraction();
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "black" }}></View>

      <View
        style={{ flex: 25, backgroundColor: "darkgreen", alignItems: "center" }}
      >
        <CustomLabel>Hello Welcome</CustomLabel>
        <CustomText fSize={30} a={"React"} b={"Native"} c={"yellow"} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 150,
          }}
        >
          <Button title="Change Count" onPress={changeCount} />
          <Text style={{ color: "white" }}>{count}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 150,
            marginTop: 30,
          }}
        >
          <Button title="Increment x" onPress={changeX} />
          <Text style={{ color: "white" }}>{x}</Text>
        </View>

        <View style={{ marginTop: 30, width: 300 }}>
          <TextInput
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              paddingHorizontal: 20,
            }}
            placeholder="user name"
            placeholderTextColor={"#5a5a5a"}
            onChangeText={onChangeUsername}
          />
          <TextInput
            style={{
              backgroundColor: "white",
              color: "black",
              marginTop: 20,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}
            placeholder="password"
            placeholderTextColor={"#5a5a5a"}
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Button title="Show user name" onPress={displayUsername} />
        </View>

        <View style={{ marginTop: 30 }}>
          <Button title="Addition" onPress={addNumber} />
        </View>
      </View>

      <View style={{ flex: 1.4, backgroundColor: "black" }}></View>
    </View>
  );
}

type CustomTextProps = {
  fSize?: number;
  a: string;
  b: string;
  c: string;
};

function CustomText(props: CustomTextProps) {
  return (
    <Text style={{ fontSize: props.fSize, color: props.c, marginBottom: 20 }}>
      {props.a} {props.b}
    </Text>
  );
}

export default App;
