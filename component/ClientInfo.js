import React from "react";
import { Icon } from "react-native-elements";
import { Text, View, StyleSheet, Image } from "react-native";

const Clientinfo = ({ data }) => {
  const num = data.phone
    .replace(/\.|-|,/g, "")
    .split(" ")
    .join("");

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.containter}>
        <Icon name="mail" color="orange" />
        <Text style={styles.data}>{data.email.toLowerCase()}</Text>
      </View>
      <View style={styles.containter}>
        <Icon name="phone" color="green" />
        <Text style={styles.data}>+56 {num}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: "10%",
    justifyContent: "space-between",
    paddingBottom: 15,
    height: "70%",
    width: "90%",
    maxWidth: 500,
    borderRadius: 15,
    shadowColor: "#694e00",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: "#fff3cf",
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1,
    width: null,
    height: null,
  },
  imageContainer: {
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    width: "100%",
  },
  title: {
    color: "#552F00",
    fontSize: 28,
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  data: {
    color: "#552f00",
    fontSize: 18,
    textAlign: "center",
    marginLeft: 2,
  },
  containter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Clientinfo;
