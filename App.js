import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ClientInfo from "./component/ClientInfo";

const App = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    phone: "",
    image: "",
    id: "",
  });

  const API = "https://0q27loouph.execute-api.us-east-1.amazonaws.com/";

  const getData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setstate({
        image: data.image,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
    } catch (error) {
      console.error("error in fetch", error);
    }
  };

  useEffect(() => {
    setTimeout(getData, 0);
  }, []);

  const handleClick = async () => {
    getData();
    setstate({ name: "" });
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(253, 126, 20, 1)", "rgba(253, 126, 20, 0.4)"]}
        style={styles.background}
      />
      {state.name === "" ? (
        <ActivityIndicator size="large" color="#fd7d14" />
      ) : (
        <>
          <ClientInfo data={state} key={state.id} />
          <TouchableOpacity style={styles.btn} onPress={handleClick}>
            <Text style={styles.btnText}>Refresh</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  btn: {
    position: "absolute",
    bottom: 50,
    width: "45%",
    maxWidth: 250,
    padding: 10,
    backgroundColor: "#fff3cf",
    borderRadius: 15,
    shadowColor: "#694e00",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btnText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default App;
